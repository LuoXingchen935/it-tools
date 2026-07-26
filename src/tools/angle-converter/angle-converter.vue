<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  deg: { value: 'degree (°)', label: 'degree (°)' },
  rad: { value: 'radian', label: 'radian' },
  turn: { value: 'turn', label: 'turn' },
  gradian: { value: 'gradian', label: 'gradian' },
  grad: { value: 'grad', label: 'grad' },
  gon: { value: 'gon', label: 'gon' },
};
</script>

<template>
  <UnitsConverter default-unit="deg" converter-type="convert" :supported-units="supportedUnits" label-width="150px" />
</template>
