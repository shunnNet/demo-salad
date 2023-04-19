<script setup>
import ComposingAnime from '@/components/common/animation/ComposingAnime.vue'
</script>
<template>
  <ComposingAnime
    :rubber-band="{ style: { animationDelay: '0.3s' } }"
    :bounce-in-down="{ style: { animationDuration: '0.9s' } }"
  >
    <slot></slot>
  </ComposingAnime>
</template>
