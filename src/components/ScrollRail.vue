<script setup>
import ScrollTrigger from '@/components/ScrollTrigger.vue'
import { windowHeight } from '@/store/common.js'

const emit = defineEmits(['frame-change'])

defineProps({
  length: {
    type: [Number],
    default: 2000,
  },
  frameRate: {
    type: Number,
    default: 24,
  },
})
</script>
<template>
  <ScrollTrigger
    class="scroll-rail"
    start="window"
    :length="length - windowHeight"
    :style="{ height: `${length}px` }"
    :frame-rate="frameRate"
    v-slot="{ progress, isActive, frame }"
    @frame-change="emit('frame-change', $event)"
  >
    <div class="scroll-rail__car" :style="{ height: `${windowHeight}px` }">
      <slot :progress="progress" :is-active="isActive" :frame="frame" />
    </div>
  </ScrollTrigger>
</template>
<style lang="scss">
.scroll-rail {
  &__car {
    position: sticky;
    top: 0;
    width: 100%;
  }
}
</style>
