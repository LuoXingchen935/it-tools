<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => ({
    label: String(start + i),
    value: start + i,
  }));
}

interface Field {
  mode: 'every' | 'specific' | 'range' | 'increment';
  values: number[];
  start: number;
  end: number;
  step: number;
  min: number;
  max: number;
}

// CRON FIELDS
function createField(start: number, end: number) {
  return ref({
    mode: 'every',
    values: [],
    start,
    end,
    min: start,
    max: end,
    step: 1,
  } as Field);
}

const seconds = createField(0, 59);
const minutes = createField(0, 59);
const hours = createField(0, 23);
const dayOfMonth = createField(1, 31);
const month = createField(1, 12);
const dayOfWeek = createField(0, 6);
const year = createField(1970, 2099);

const fields: {
  field: Ref<Field>;
  label: string;
  description: string;
  options?: { label: string; value: number }[];
}[] = [
  { field: seconds, label: t('tools.cron-expression-builder.texts.label-seconds'), description: '0-59' },
  { field: minutes, label: t('tools.cron-expression-builder.texts.label-minutes'), description: '0-59' },
  { field: hours, label: t('tools.cron-expression-builder.texts.label-hours'), description: '0-23' },
  { field: dayOfMonth, label: t('tools.cron-expression-builder.texts.label-day-of-month'), description: '1-31' },
  {
    field: month,
    label: t('tools.cron-expression-builder.texts.label-month'),
    description: '1-12',
    options: [
      { label: t('tools.cron-expression-builder.texts.label-january'), value: 1 },
      { label: t('tools.cron-expression-builder.texts.label-february'), value: 2 },
      { label: t('tools.cron-expression-builder.texts.label-march'), value: 3 },
      { label: t('tools.cron-expression-builder.texts.label-april'), value: 4 },
      { label: t('tools.cron-expression-builder.texts.label-may'), value: 5 },
      { label: t('tools.cron-expression-builder.texts.label-june'), value: 6 },
      { label: t('tools.cron-expression-builder.texts.label-july'), value: 7 },
      { label: t('tools.cron-expression-builder.texts.label-august'), value: 8 },
      { label: t('tools.cron-expression-builder.texts.label-september'), value: 9 },
      { label: t('tools.cron-expression-builder.texts.label-october'), value: 10 },
      { label: t('tools.cron-expression-builder.texts.label-november'), value: 11 },
      { label: t('tools.cron-expression-builder.texts.label-december'), value: 12 },
    ],
  },
  {
    field: dayOfWeek,
    label: t('tools.cron-expression-builder.texts.label-day-of-week'),
    options: [
      { label: t('tools.cron-expression-builder.texts.label-sunday'), value: 0 },
      { label: t('tools.cron-expression-builder.texts.label-monday'), value: 1 },
      { label: t('tools.cron-expression-builder.texts.label-tuesday'), value: 2 },
      { label: t('tools.cron-expression-builder.texts.label-wednesday'), value: 3 },
      { label: t('tools.cron-expression-builder.texts.label-thursday'), value: 4 },
      { label: t('tools.cron-expression-builder.texts.label-friday'), value: 5 },
      { label: t('tools.cron-expression-builder.texts.label-saturday'), value: 6 },
    ],
    description: '0-6 (Sunday=0, Monday=1, ..., Saturday=6)',
  },
  { field: year, label: t('tools.cron-expression-builder.texts.label-year'), description: '1970-...' },
] as const;

const modes = [
  { label: t('tools.cron-expression-builder.texts.label-every'), value: 'every' },
  { label: t('tools.cron-expression-builder.texts.label-specific-values'), value: 'specific' },
  { label: t('tools.cron-expression-builder.texts.label-range'), value: 'range' },
  { label: t('tools.cron-expression-builder.texts.label-increment'), value: 'increment' },
];

function validateField(label: string, field: Field) {
  const errs: string[] = [];

  if (field.mode === 'specific') {
    if (!field.values.length) {
      errs.push(`${label}: select at least one value`);
    }
  }

  if (field.mode === 'range') {
    if (field.start > field.end) {
      errs.push(`${label}: start cannot be greater than end`);
    }
    if (field.start < field.min || field.end > field.max) {
      errs.push(`${label}: start must be within allowed range`);
    }
  }

  if (field.mode === 'increment') {
    if (field.step < 1) {
      errs.push(`${label}: step must be >= 1`);
    }
    if (field.start > field.end) {
      errs.push(`${label}: start cannot be greater than end`);
    }
    if (field.start < field.min || field.end > field.max) {
      errs.push(`${label}: start must be within allowed range`);
    }
  }

  return errs;
}

const errors = computed(() => {
  const list: string[] = [];

  list.push(...validateField('Seconds', seconds.value));
  list.push(...validateField('Minutes', minutes.value));
  list.push(...validateField('Hours', hours.value));
  list.push(...validateField('Day of Month', dayOfMonth.value));
  list.push(...validateField('Month', month.value));
  list.push(...validateField('Day of Week', dayOfWeek.value));
  list.push(...validateField('Year', year.value));

  // Global rule: DOM and DOW both specific → ambiguous
  if (dayOfMonth.value.mode === 'specific' && dayOfWeek.value.mode === 'specific') {
    list.push('Day of Month and Day of Week cannot both be specific');
  }

  return list;
});

const isValid = computed(() => errors.value.length === 0);

function buildField(field: any) {
  switch (field.mode) {
    case 'every':
      return '*';
    case 'specific':
      return field.values.join(',');
    case 'range':
      return `${field.start}-${field.end}`;
    case 'increment':
      return `${field.start}/${field.step}`;
    default:
      return '*';
  }
}

const cron = computed(() => {
  return [
    buildField(seconds.value),
    buildField(minutes.value),
    buildField(hours.value),
    buildField(dayOfMonth.value),
    buildField(month.value),
    buildField(dayOfWeek.value),
    buildField(year.value),
  ].join(' ');
});

defineExpose({ cron, isValid, errors });
</script>

<template>
  <div>
    <NCard :title="t('tools.cron-expression-builder.texts.title-generated-cron-expression')" size="small" mb-2>
      <input-copyable :value="cron" />
      <div v-if="!isValid" mt-2>
        <NText type="error">{{ t('tools.cron-expression-builder.texts.tag-cron-expression-is-invalid') }}</NText>
      </div>
    </NCard>

    <NAlert v-if="errors.length" type="error" :title="t('tools.cron-expression-builder.texts.title-validation-errors')" closable mb-2>
      <ul>
        <li v-for="err in errors" :key="err">
          {{ err }}
        </li>
      </ul>
    </NAlert>

    <n-tabs type="segment" animated>
      <n-tab-pane :name="label" :tab="label" v-for="{ field, label, description, options } in fields" :key="label">
        <NFormItem :label="t('tools.cron-expression-builder.texts.label-mode')" label-placement="left">
          <NSelect v-model:value="field.value.mode" :options="modes" style="width: 200px" mr-2 />
          <NText v-if="description" type="secondary" size="small" italic>
            {{ description }}
          </NText>
        </NFormItem>

        <!-- Specific values -->
        <div v-if="field.value.mode === 'specific'">
          <NCheckboxGroup v-if="options" v-model:value="field.value.values">
            <NSpace wrap>
              <NCheckbox v-for="opt in options" :key="opt.value" :value="opt.value">
                {{ opt.label }}
              </NCheckbox>
            </NSpace>
          </NCheckboxGroup>
          <NCheckboxGroup v-else v-model:value="field.value.values">
            <NSpace wrap>
              <NCheckbox
                v-for="opt in range(field.value.start, field.value.end)"
                :key="opt.value"
                :value="opt.value"
                style="width: 50px"
              >
                {{ opt.label }}
              </NCheckbox>
            </NSpace>
          </NCheckboxGroup>
        </div>

        <!-- Range -->
        <div v-if="field.value.mode === 'range'">
          <NSpace v-if="options">
            <NFormItem :label="t('tools.cron-expression-builder.texts.label-from')" label-placement="left">
              <NSelect v-model:value="field.value.start" :options="options" />
            </NFormItem>
            <NFormItem :label="t('tools.cron-expression-builder.texts.label-to')" label-placement="left">
              <NSelect v-model:value="field.value.end" :options="options" />
            </NFormItem>
          </NSpace>
          <NSpace v-else>
            <NFormItem :label="t('tools.cron-expression-builder.texts.label-from')" label-placement="left">
              <NInputNumber v-model:value="field.value.start" :min="field.value.min" :max="field.value.max" />
            </NFormItem>
            <NFormItem :label="t('tools.cron-expression-builder.texts.label-to')" label-placement="left">
              <NInputNumber v-model:value="field.value.end" :min="field.value.min" :max="field.value.max" />
            </NFormItem>
          </NSpace>
        </div>

        <!-- Increment -->
        <div v-if="field.value.mode === 'increment'">
          <NSpace>
            <NFormItem :label="t('tools.cron-expression-builder.texts.label-start-at')" label-placement="left" v-if="options">
              <NSelect v-model:value="field.value.start" :options="options" />
            </NFormItem>
            <NFormItem :label="t('tools.cron-expression-builder.texts.label-start-at')" label-placement="left" v-else>
              <NInputNumber v-model:value="field.value.start" :min="field.value.min" :max="field.value.max" />
            </NFormItem>
            <NFormItem :label="t('tools.cron-expression-builder.texts.label-every')" label-placement="left">
              <NInputNumber v-model:value="field.value.step" :min="1" :max="field.value.end" mr-1 />
              <NText>{{ label.toLowerCase() }}</NText>
            </NFormItem>
          </NSpace>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
