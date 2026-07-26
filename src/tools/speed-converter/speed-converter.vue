<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  'm/s': { value: 'meter per second', label: 'meter per second' },
  'km/h': { value: 'kilometer per hour', label: 'kilometer per hour' },
  'mi/h': { value: 'miles per hour', label: 'miles per hour' },
  knot: { value: 'knot', label: 'knot' },
  'ft/s': { value: 'feet per second', label: 'feet per second' },
};
</script>

<template>
  <UnitsConverter default-unit="m/s" converter-type="speed" :supported-units="supportedUnits" label-width="150px" />
</template>
