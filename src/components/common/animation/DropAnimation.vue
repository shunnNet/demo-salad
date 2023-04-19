<script setup>
import ComposingAnime from '@/components/common/animation/ComposingAnime.vue'

defineProps({
  delay: {
    type: Number,
    default: 0,
  },
})
</script>
<template>
  <ComposingAnime
    :rubber-band="{ style: { animationDelay: `${0.3 + delay}s` } }"
    :bounce-in-down="{
      style: { animationDuration: '0.9s', animationDelay: `${delay}s` },
    }"
  >
    <slot></slot>
  </ComposingAnime>
</template>
