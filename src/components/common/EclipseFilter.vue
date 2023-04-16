<script setup>
const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
  direction: {
    type: String,
    default: 'toRight',
    validator(val) {
      return ['toRight', 'toLeft', 'toTop', 'toBottom'].includes(val)
    },
  },
})

const genProperty = (progress) => {
  switch (props.direction) {
    case 'toRight':
      return `translateX(${progress}%)`
    case 'toLeft':
      return `translateX(-${progress}%)`
    case 'toTop':
      return `translateY(-${progress}%)`
    case 'toBottom':
      return `translateY(${progress}%)`
  }
}
</script>
<template>
  <div class="eclipse-filter">
    <div
      class="eclipse-filter__filter"
      :style="{
        transform: genProperty(progress),
      }"
    />
    <slot />
  </div>
</template>
<style lang="scss">
.eclipse-filter {
  position: relative;
  overflow: hidden;
  &__filter {
    position: absolute;
    z-index: 10;
    inset: 0;
    background-color: black;
  }
}
</style>
