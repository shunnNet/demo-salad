<script setup>
import ComposingAnime from '@/components/common/animation/ComposingAnime.vue'
</script>
<template>
  <ComposingAnime :zoom-in-custom="{ style: { animationDuration: '.4s' } }">
    <slot></slot>
  </ComposingAnime>
</template>
