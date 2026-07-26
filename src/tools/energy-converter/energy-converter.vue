<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  J: { value: 'joule', label: 'joule' },
  PJ: { value: 'petajoule', label: 'petajoule' },
  TJ: { value: 'terajoule', label: 'terajoule' },
  GJ: { value: 'gigajoule', label: 'gigajoule' },
  MJ: { value: 'megajoule', label: 'megajoule' },
  kJ: { value: 'kilojoule', label: 'kilojoule' },
  hJ: { value: 'hectojoule', label: 'hectojoule' },
  daJ: { value: 'decajoule', label: 'decajoule' },
  dJ: { value: 'decijoule', label: 'decijoule' },
  cJ: { value: 'centijoule', label: 'centijoule' },
  mJ: { value: 'millijoule', label: 'millijoule' },
  µJ: { value: 'microjoule', label: 'microjoule' },
  nJ: { value: 'nanojoule', label: 'nanojoule' },
  pJ: { value: 'picojoule', label: 'picojoule' },
  fJ: { value: 'femtojoule', label: 'femtojoule' },
  Wh: { value: 'watt-hour', label: 'watt-hour' },
  PWh: { value: 'petawatt-hour', label: 'petawatt-hour' },
  TWh: { value: 'terawatt-hour', label: 'terawatt-hour' },
  GWh: { value: 'gigawatt-hour', label: 'gigawatt-hour' },
  MWh: { value: 'megawatt-hour', label: 'megawatt-hour' },
  kWh: { value: 'kilowatt-hour', label: 'kilowatt-hour' },
  hWh: { value: 'hectowatt-hour', label: 'hectowatt-hour' },
  daWh: { value: 'decawatt-hour', label: 'decawatt-hour' },
  dWh: { value: 'deciwatt-hour', label: 'deciwatt-hour' },
  cWh: { value: 'centiwatt-hour', label: 'centiwatt-hour' },
  mWh: { value: 'milliwatt-hour', label: 'milliwatt-hour' },
  µWh: { value: 'microwatt-hour', label: 'microwatt-hour' },
  nWh: { value: 'nanowatt-hour', label: 'nanowatt-hour' },
  pWh: { value: 'picowatt-hour', label: 'picowatt-hour' },
  fWh: { value: 'femtowatt-hour', label: 'femtowatt-hour' },
};
</script>

<template>
  <UnitsConverter default-unit="J" :supported-units="supportedUnits" label-width="150px" />
</template>
