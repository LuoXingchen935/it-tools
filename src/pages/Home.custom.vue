<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render';
import { useTheme } from '../ui/c-link/c-link.theme';

const linkTheme = useTheme();

const homeCustomMarkdown = ref('');
const base = import.meta.env.BASE_URL ?? '/';

const res = await fetch(`${base}home.custom.md`);
if (res.ok) {
  homeCustomMarkdown.value = await res.text();
}
</script>

<template>
  <div v-if="homeCustomMarkdown" class="home-custom-md">
    <VueMarkdown :source="homeCustomMarkdown" />
  </div>
</template>

<style scoped lang="less">
::v-deep(.home-custom-md) a {
  line-height: inherit;
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  color: v-bind('linkTheme.default.textColor');
  border-radius: 4px;
  transition: color cubic-bezier(0.4, 0, 0.2, 1) 0.3s;

  outline-offset: 1px;

  &:hover {
    color: v-bind('linkTheme.default.hover.textColor');
  }

  &:active {
    color: v-bind('linkTheme.default.textColor');
  }

  &:focus {
    color: v-bind('linkTheme.default.outline.color');
  }
}
</style>
