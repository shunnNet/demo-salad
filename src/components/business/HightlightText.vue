<script setup>
import ScrollTrigger from '@/components/ScrollTrigger.vue'
defineProps({
  text: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: 'h2',
  },
  theme: {
    type: String,
    default: 'primary',
  },
  animate: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <ScrollTrigger
    v-slot="{ isActive }"
    :start="400"
    :is="tag"
    class="highlight-text"
    :class="{
      [`highlight-text--${theme}`]: true,
    }"
  >
    <div v-if="$slots.default" class="highlight-text__text">
      <slot></slot>
    </div>
    <span v-else class="highlight-text__text" v-text="text" />

    <div class="highlight-text__line" :class="{ hide: animate && !isActive }" />
  </ScrollTrigger>
</template>
<style lang="scss">
.highlight-text {
  position: relative;
  display: inline-block;
  &__text {
    position: relative;
    z-index: 2;
    white-space: nowrap;
  }
  &__line {
    content: '';
    display: block;
    position: absolute;
    bottom: 6px;
    left: -8px;
    right: -8px;
    height: 6px;
    background-color: theme(primary);
    z-index: 0;
    transition: 0.5s all;
    transform: scaleX(1);
    transform-origin: left;
    &.hide {
      transform: scaleX(0);
    }
  }
}

.highlight-text--primary {
  .highlight-text__line {
    background-color: theme(primary);
  }
}
.highlight-text--secondary {
  .highlight-text__line {
    background-color: theme(secondary);
  }
}
</style>
