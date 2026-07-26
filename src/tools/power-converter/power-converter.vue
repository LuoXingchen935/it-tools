<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  W: { value: 'watt', label: 'watt' },
  PW: { value: 'petawatt', label: 'petawatt' },
  TW: { value: 'terawatt', label: 'terawatt' },
  GW: { value: 'gigawatt', label: 'gigawatt' },
  MW: { value: 'megawatt', label: 'megawatt' },
  kW: { value: 'kilowatt', label: 'kilowatt' },
  hW: { value: 'hectowatt', label: 'hectowatt' },
  daW: { value: 'decawatt', label: 'decawatt' },
  dW: { value: 'deciwatt', label: 'deciwatt' },
  cW: { value: 'centiwatt', label: 'centiwatt' },
  mW: { value: 'milliwatt', label: 'milliwatt' },
  μW: { value: 'microwatt', label: 'microwatt' },
  nW: { value: 'nanowatt', label: 'nanowatt' },
  pW: { value: 'picowatt', label: 'picowatt' },
  fW: { value: 'femtowatt', label: 'femtowatt' },
  horsepower: { value: 'horsepower', label: 'horsepower' },
  hp: { value: 'mechanical horsepower', label: 'mechanical horsepower' },
};
</script>

<template>
  <UnitsConverter default-unit="W" converter-type="convert" :supported-units="supportedUnits" label-width="150px" />
</template>
