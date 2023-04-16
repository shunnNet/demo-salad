<script>
import { computed } from 'vue'

export default {
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'vertical',
      validator(val) {
        return ['vertical', 'horizontal'].includes(val)
      },
    },
    duration: {
      type: String,
      default: '0.3s',
    },
  },
  setup(props) {
    const lifeCycle = computed(() => {
      const lengthProperty =
        props.direction === 'vertical' ? 'maxHeight' : 'maxWidth'
      const scrollProperty =
        props.direction === 'vertical' ? 'scrollHeight' : 'scrollWidth'
      const overflowProperty =
        props.direction === 'vertical' ? 'overflowY' : 'overflowX'

      return {
        beforeEnter(el) {
          el.style[lengthProperty] = 0
          el.style[overflowProperty] = 'hidden'
        },

        enter(el) {
          if (el[scrollProperty] !== 0) {
            el.style[lengthProperty] = `${el[scrollProperty]}px`
          } else {
            el.style[lengthProperty] = 0
          }

          el.style[overflowProperty] = 'hidden'
        },

        afterEnter(el) {
          el.style[lengthProperty] = ''
        },

        beforeLeave(el) {
          el.style[lengthProperty] = `${el[scrollProperty]}px`
          el.style[overflowProperty] = 'hidden'
        },

        leave(el) {
          if (el[scrollProperty] !== 0) {
            el.style[lengthProperty] = 0
          }
        },

        afterLeave(el) {
          el.style[lengthProperty] = ''
        },
      }
    })
    return {
      lifeCycle,
    }
  },
}
</script>

<template>
  <transition name="collapse" v-on="lifeCycle" :duration="300">
    <div
      class="collapse"
      v-show="collapse"
      v-bind="$attrs"
      :style="{ '--duration': duration }"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<style scoped>
.collapse {
  padding: 0 !important;
  border: 0 !important;
}
.collapse-enter-active,
.collapse-leave-active {
  transition-property: max-width, max-height;
  transition-duration: var(--duration);
}
</style>
