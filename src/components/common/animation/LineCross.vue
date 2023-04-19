<script setup>
import LineSvg from '@/assets/svg/line.svg'
</script>
<template>
  <div class="line-cross">
    <LineSvg class="line-cross__line" />
    <LineSvg class="line-cross__line" />
  </div>
</template>
<style lang="scss">
.line-cross {
  @include cube(24px);
  position: relative;
  &__line {
    position: absolute;
    color: theme(light);
    &:nth-child(1) {
      transform: rotate(90deg);
    }
  }
}
</style>
