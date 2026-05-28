<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  'm/s': 'meter per second',
  'km/h': 'kilometer per hour',
  'mi/h': 'miles per hour',
  'knot': 'knot',
  'ft/s': 'feet per second',
};
</script>

<template>
  <UnitsConverter default-unit="m/s" converter-type="speed" :supported-units="supportedUnits" label-width="150px" />
</template>
