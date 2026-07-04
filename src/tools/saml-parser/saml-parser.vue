<script setup lang="ts">
import { ref } from 'vue';
import saml from '@boxyhq/saml20';
import { inflate } from 'pako';
import { Base64 } from 'js-base64';

const input = ref('');
const thumbprint = ref('');
const publicKey = ref('');
const audience = ref('');
const bypassExpiration = ref(false);

const parsingResult = ref<{
  type: 'assertion'
  raw: string
  profile: {
    claims?: any[]
    audience?: string
    issuer?: string
    assertionId?: string
    sessionIndex?: string
    notBefore?: string
    notOnOrAfter?: string
  }
  validation: { ok: boolean; error?: string | null }
} | null>();

const error = ref<string | null>(null);
const loading = ref(false);

function isBase64(str: string) {
  try {
    Base64.decode(str.trim());
    return true;
  }
  catch {
    return false;
  }
}

function inflateBase64(str: string) {
  const bytes = Base64.toUint8Array(str.trim());
  return new TextDecoder().decode(inflate(bytes, { raw: true }));
}

function looksLikeXml(str: string) {
  return str.trim().startsWith('<');
}

async function validate(rawAssertion: string) {
  const options: any = {
    audience: audience.value || undefined,
    bypassExpiration: bypassExpiration.value || undefined,
  };
  if (thumbprint.value) {
    options.thumbprint = thumbprint.value;
  }
  if (publicKey.value) {
    options.publicKey = publicKey.value;
  }

  try {
    const profile = await saml.validate(rawAssertion, options);
    return { ok: true, profile, error: null };
  }
  catch (e: any) {
    return { ok: false, profile: e.profile ?? null, error: String(e) };
  }
}

async function detect() {
  error.value = null;
  loading.value = true;
  parsingResult.value = null;

  try {
    const raw = input.value.trim();
    if (!raw) {
      error.value = 'Input is empty.';
      return;
    }

    let xml = raw;

    if (isBase64(raw)) {
      xml = Base64.decode(raw);
      if (!looksLikeXml(xml)) {
        try {
          xml = inflateBase64(raw);
        }
        catch {
          error.value = 'Input is not valid Base64 or DEFLATE or XML.';
          return;
        }
      }
    }
    else {
      error.value = 'Input is not valid Base64 or DEFLATE or XML.';
      return;
    }

    const parsedProfile = await saml.parse(xml);
    const validationResult = await validate(xml);

    parsingResult.value = {
      type: 'assertion',
      raw: xml,
      profile: validationResult.profile ?? parsedProfile,
      validation: { ok: validationResult.ok, error: validationResult.error ?? null },
    };
  }
  catch (e: any) {
    error.value = 'Failed to parse SAML assertion.';
  }
  finally {
    loading.value = false;
  }
}

const profile = computed(() => parsingResult.value?.profile);
const claims = computed(() => Object.entries(profile.value?.claims || []).map(([name, value]) => ({ name, value })));
const validation = computed(() => parsingResult.value?.validation || { ok: false, error: null });

const signatureStatus = computed(() => {
  if (validation.value.ok) {
    return 'Signature & assertion valid';
  }
  if (validation.value.error) {
    return `Validation failed: ${validation.value.error}`;
  }
  return 'Not validated (no key / thumbprint)';
});
</script>

<template>
  <div>
    <c-input-text
      v-model:value="input"
      label="SAML assertion (Base64, DEFLATE, or XML):"
      multiline
      rows="8"
      placeholder="Paste SAML assertion (Base64, DEFLATE, or XML)"
      mb-2
    />

    <n-card size="small" title="Validation Options" mb-2>
      <c-input-text
        v-model:value="thumbprint"
        label="Thumbprint:"
        label-position="left"
        label-width="100px"
        placeholder="Thumbprint (optional)"
        mb-1
      />
      <c-input-text
        v-model:value="publicKey"
        label="Public Key:"
        label-position="left"
        label-width="100px"
        multiline
        rows="3"
        placeholder="Public key (optional)"
        mb-1
      />
      <c-input-text
        v-model:value="audience"
        label="Audience:"
        label-position="left"
        label-width="100px"
        placeholder="Audience (optional)"
        mb-1
      />
      <n-space justify="center">
        <n-switch v-model:value="bypassExpiration">
          <template #checked>
            Bypass Expiration
          </template>
          <template #unchecked>
            Don't Bypass Expiration
          </template>
        </n-switch>
      </n-space>
    </n-card>

    <n-space justify="center">
      <n-button type="primary" :loading="loading" @click="detect">
        Detect, Parse and Validate
      </n-button>
    </n-space>

    <n-alert v-if="error" type="error" show-icon mb-2 mt-2>
      {{ error }}
    </n-alert>

    <c-card v-if="!error && !loading && parsingResult?.raw" title="Parsed SAML Assertion" mt-2>
      <input-copyable
        label="Issuer:"
        label-width="100px"
        label-position="left"
        :value="profile?.issuer || ''"
        mb-1
      />

      <input-copyable
        label="Assertion Id:"
        label-width="100px"
        label-position="left"
        :value="profile?.assertionId || ''"
        mb-1
      />

      <input-copyable
        label="Session Index:"
        label-width="100px"
        label-position="left"
        :value="profile?.sessionIndex || ''"
        mb-1
      />

      <input-copyable
        label="NotBefore:"
        label-width="100px"
        label-position="left"
        :value="profile?.notBefore || ''"
        mb-1
      />

      <input-copyable
        label="NotOnOrAfter:"
        label-width="100px"
        label-position="left"
        :value="profile?.notOnOrAfter || ''"
        mb-1
      />

      <input-copyable
        label="Audience:"
        label-width="100px"
        label-position="left"
        :value="profile?.audience || ''"
        mb-1
      />

      <input-copyable
        label="Signature Validation Status:"
        label-position="left"
        :value="signatureStatus"
        mb-1
      />

      <c-alert v-if="!parsingResult.validation?.ok && parsingResult.validation?.error" type="error" show-icon>
        {{ parsingResult.validation.error }}
      </c-alert>

      <c-card v-if="claims.length > 0" size="small" title="Claims" mb-1>
        <n-data-table
          :columns="[
            { title: 'Claim', key: 'claim' },
            { title: 'Value', key: 'value' },
          ]"
          :data="claims.map((c) => ({ claim: c.name, value: c.value }))"
          size="small"
          striped
        />
      </c-card>

      <c-card title="Raw Assertion" mt-2>
        <textarea-copyable
          :value="JSON.stringify(parsingResult.profile, null, 2)"
          language="json"
          mb-2
        />

        <textarea-copyable
          :value="parsingResult?.raw"
          language="xml"
          word-wrap
        />
      </c-card>
    </c-card>
  </div>
</template>
