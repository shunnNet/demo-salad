<script setup>
import { computed } from 'vue'
import Triangle from '@/assets/svg/triangle.svg'
const props = defineProps({
  theme: {
    type: String,
    default: 'circle',
    validator: (val) => ['circle', 'round'].includes(val),
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
const buttonThemeClass = computed(() => {
  return {
    [`salad-player-button--${props.buttonTheme}`]: true,
    'salad-player-button--loading': props.loading.value,
  }
})
</script>
<template>
  <div class="salad-player-play-button" :class="buttonThemeClass">
    <Triangle class="salad-player-play-button__play-icon" v-show="!loading" />

    <div class="salad-player-play-button__loading" v-show="loading">
      Loading...
    </div>
  </div>
</template>
<style lang="scss">
.salad-player-play-button {
  @include circle(112px);
  background-color: rgba(theme(primary), 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &__play-icon {
    color: theme(light);
    width: 34px;
    height: 49px;
    transform: translateX(10%);
  }
  &__loading {
  }
}
</style>
