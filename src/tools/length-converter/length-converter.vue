<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  m: { value: 'meter', label: 'meter' },
  Pm: { value: 'petameter', label: 'petameter' },
  Tm: { value: 'terameter', label: 'terameter' },
  Gm: { value: 'gigameter', label: 'gigameter' },
  Mm: { value: 'megameter', label: 'megameter' },
  km: { value: 'kilometer', label: 'kilometer' },
  hm: { value: 'hectometer', label: 'hectometer' },
  dam: { value: 'decameter', label: 'decameter' },
  dm: { value: 'decimeter', label: 'decimeter' },
  cm: { value: 'centimeter', label: 'centimeter' },
  mm: { value: 'millimeter', label: 'millimeter' },
  µm: { value: 'micrometer', label: 'micrometer' },
  nm: { value: 'nanometer', label: 'nanometer' },
  pm: { value: 'picometer', label: 'picometer' },
  fm: { value: 'femtometer', label: 'femtometer' },
  ft: { value: "foot (ft/')", label: "foot (ft/')" },
  in: { value: 'inch (")', label: 'inch (")' },
  yd: { value: 'yard', label: 'yard' },
  mi: { value: 'mile', label: 'mile' },
  nmi: { value: 'nautical mile (M/NM)', label: 'nautical mile (M/NM)' },
  ly: { value: 'light-year', label: 'light-year' },
  pc: { value: 'parsec', label: 'parsec' },
  pica: { value: 'pica', label: 'pica' },
};
</script>

<template>
  <UnitsConverter default-unit="m" :supported-units="supportedUnits" label-width="150px" />
</template>
