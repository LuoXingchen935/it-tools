<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  N: { value: 'newton', label: 'newton' },
  PN: { value: 'petanewton', label: 'petanewton' },
  TN: { value: 'teranewton', label: 'teranewton' },
  GN: { value: 'giganewton', label: 'giganewton' },
  MN: { value: 'meganewton', label: 'meganewton' },
  kN: { value: 'kilonewton', label: 'kilonewton' },
  hN: { value: 'hectonewton', label: 'hectonewton' },
  daN: { value: 'decanewton', label: 'decanewton' },
  dN: { value: 'decinewton', label: 'decinewton' },
  cN: { value: 'centinewton', label: 'centinewton' },
  mN: { value: 'millinewton', label: 'millinewton' },
  µN: { value: 'micronewton', label: 'micronewton' },
  nN: { value: 'nanonewton', label: 'nanonewton' },
  pN: { value: 'piconewton', label: 'piconewton' },
  fN: { value: 'femtonewton', label: 'femtonewton' },
  dyn: { value: 'dyne', label: 'dyne' },
  lbf: { value: 'pound of force', label: 'pound of force' },
  kip: { value: 'kip', label: 'kip' },
  klb: { value: 'klb', label: 'klb' },
  kipf: { value: 'kipf', label: 'kipf' },
  klbf: { value: 'klbf', label: 'klbf' },
  pdl: { value: 'poundal', label: 'poundal' },
  kgf: { value: 'kilogram-force', label: 'kilogram-force' },
  kp: { value: 'kilopond', label: 'kilopond' },
  Mp: { value: 'megapond', label: 'megapond' },
  tf: { value: 'tonne-force', label: 'tonne-force' },
  'metric tf': { value: 'metric ton-force', label: 'metric ton-force' },
  'megagram-force': { value: 'megagram-force', label: 'megagram-force' },
};
</script>

<template>
  <UnitsConverter default-unit="N" converter-type="convert" :supported-units="supportedUnits" label-width="150px" />
</template>
