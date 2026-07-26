<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  Hz: { value: 'hertz', label: 'hertz' },
  mHz: { value: 'millihertz', label: 'millihertz' },
  kHz: { value: 'kilohertz', label: 'kilohertz' },
  MHz: { value: 'megahertz', label: 'megahertz' },
  GHz: { value: 'gigahertz', label: 'gigahertz' },
  THz: { value: 'terahertz', label: 'terahertz' },
  rpm: { value: 'revolutions per minute', label: 'revolutions per minute' },
  'deg/s': { value: 'degree per second', label: 'degree per second' },
  'rad/s': { value: 'radian per second', label: 'radian per second' },
};
</script>

<template>
  <UnitsConverter default-unit="Hz" converter-type="frequency" :supported-units="supportedUnits" label-width="160px" />
</template>
