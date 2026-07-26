<script setup lang="ts">
import UnitsConverter from '@/components/UnitsConverter.vue';

const supportedUnits = {
  Pa: { value: 'pascal', label: 'pascal' },
  PPa: { value: 'pettapascal', label: 'pettapascal' },
  TPa: { value: 'terapascal', label: 'terapascal' },
  GPa: { value: 'gigapascal', label: 'gigapascal' },
  MPa: { value: 'megapascal', label: 'megapascal' },
  kPa: { value: 'kilopascal', label: 'kilopascal' },
  hPa: { value: 'hectopascal', label: 'hectopascal' },
  daPa: { value: 'decapascal', label: 'decapascal' },
  dPa: { value: 'decipascal', label: 'decipascal' },
  cPa: { value: 'centipascal', label: 'centipascal' },
  mPa: { value: 'millipascal', label: 'millipascal' },
  μPa: { value: 'micropascal', label: 'micropascal' },
  nPa: { value: 'nanopascal', label: 'nanopascal' },
  pPa: { value: 'picopascal', label: 'picopascal' },
  fPa: { value: 'femtopascal', label: 'femtopascal' },
  bar: { value: 'bar', label: 'bar' },
  Pbar: { value: 'petabar', label: 'petabar' },
  Tbar: { value: 'terabar', label: 'terabar' },
  Gbar: { value: 'gigabar', label: 'gigabar' },
  Mbar: { value: 'megabar', label: 'megabar' },
  kbar: { value: 'kilobar', label: 'kilobar' },
  hbar: { value: 'hectobar', label: 'hectobar' },
  dabar: { value: 'decabar', label: 'decabar' },
  dbar: { value: 'decibar', label: 'decibar' },
  cbar: { value: 'centibar', label: 'centibar' },
  mbar: { value: 'millibar', label: 'millibar' },
  μbar: { value: 'microbar', label: 'microbar' },
  nbar: { value: 'nanobar', label: 'nanobar' },
  pbar: { value: 'picobar', label: 'picobar' },
  fbar: { value: 'femtobar', label: 'femtobar' },
  Torr: { value: 'torr', label: 'torr' },
  mTorr: { value: 'millitorr', label: 'millitorr' },
  atm: { value: 'atmosphere', label: 'atmosphere' },
  psi: { value: 'pound per square inch', label: 'pound per square inch' },
  'lbf/in2': { value: 'lbf/in2', label: 'lbf/in2' },
};
</script>

<template>
  <UnitsConverter default-unit="Pa" :supported-units="supportedUnits" label-width="150px" />
</template>
