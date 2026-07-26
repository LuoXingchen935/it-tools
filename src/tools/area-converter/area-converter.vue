<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  'm²': { value: 'square meter', label: 'square meter' },
  'Pm²': { value: 'square petameter', label: 'square petameter' },
  'Tm²': { value: 'square terameter', label: 'square terameter' },
  'Gm²': { value: 'square gigameter', label: 'square gigameter' },
  'Mm²': { value: 'square megameter', label: 'square megameter' },
  'km²': { value: 'square kilometer', label: 'square kilometer' },
  'hm²': { value: 'square hectometer', label: 'square hectometer' },
  'dam²': { value: 'square decameter', label: 'square decameter' },
  'dm²': { value: 'square decimeter', label: 'square decimeter' },
  'cm²': { value: 'square centimeter', label: 'square centimeter' },
  'mm²': { value: 'square millimeter', label: 'square millimeter' },
  'μm²': { value: 'square micrometer', label: 'square micrometer' },
  'nm²': { value: 'square nanometer', label: 'square nanometer' },
  'pm²': { value: 'square picometer', label: 'square picometer' },
  'fm²': { value: 'square femtometer', label: 'square femtometer' },
  ac: { value: 'acre', label: 'acre' },
  ca: { value: 'centiare', label: 'centiare' },
  da: { value: 'deciare', label: 'deciare' },
  are: { value: 'are', label: 'are' },
  daa: { value: 'decare', label: 'decare' },
  ha: { value: 'hectare', label: 'hectare' },
  'ft²': { value: 'square foot (/ft2/sq ft)', label: 'square foot (/ft2/sq ft)' },
  'in²': { value: 'square inch (/in2/sq in)', label: 'square inch (/in2/sq in)' },
  'yd²': { value: 'square yard (yd2/sq yd)', label: 'square yard (yd2/sq yd)' },
  'mi²': { value: 'square mile (mi2/sq mi)', label: 'square mile (mi2/sq mi)' },
};
</script>

<template>
  <UnitsConverter default-unit="m²" :supported-units="supportedUnits" label-width="150px" />
</template>
