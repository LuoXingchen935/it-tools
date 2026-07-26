<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  g: { value: 'gram', label: 'gram' },
  Pg: { value: 'petagram', label: 'petagram' },
  Tg: { value: 'teragram', label: 'teragram' },
  Gg: { value: 'gigagram', label: 'gigagram' },
  Mg: { value: 'megagram', label: 'megagram' },
  kg: { value: 'kilogram', label: 'kilogram' },
  hg: { value: 'hectogram', label: 'hectogram' },
  dag: { value: 'decagram', label: 'decagram' },
  dg: { value: 'decigram', label: 'decigram' },
  cg: { value: 'centigram', label: 'centigram' },
  mg: { value: 'milligram', label: 'milligram' },
  μg: { value: 'microgram', label: 'microgram' },
  ng: { value: 'nanogram', label: 'nanogram' },
  pg: { value: 'picogram', label: 'picogram' },
  fg: { value: 'femtogram', label: 'femtogram' },
  tonne: { value: 'tonne', label: 'tonne' },
  t: { value: 'metric ton', label: 'metric ton' },
  kt: { value: 'kilotonne', label: 'kilotonne' },
  Mt: { value: 'megatonne', label: 'megatonne' },
  Gt: { value: 'gigatonne', label: 'gigatonne' },
  lb: { value: 'pound', label: 'pound' },
  st: { value: 'stone', label: 'stone' },
  oz: { value: 'ounce', label: 'ounce' },
  'short ton': { value: 'short ton', label: 'short ton' },
  'US ton': { value: 'US ton', label: 'US ton' },
  'long ton': { value: 'long ton', label: 'long ton' },
  'imperial ton': { value: 'imperial ton', label: 'imperial ton' },
  'displacement ton': { value: 'displacement ton', label: 'displacement ton' },
};
</script>

<template>
  <UnitsConverter default-unit="g" :supported-units="supportedUnits" label-width="150px" />
</template>
