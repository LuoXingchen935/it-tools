<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  'g-force': { value: 'g-force', label: 'g-force' },
  'm/s2': { value: 'meter per second squared', label: 'meter per second squared' },
};
</script>

<template>
  <UnitsConverter
    default-unit="g"
    converter-type="acceleration"
    :supported-units="supportedUnits"
    label-width="190px"
  />
</template>
