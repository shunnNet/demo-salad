<script>
import { h } from 'vue'
export default {
  props: {
    bounceInDown: {
      type: [Boolean, Object],
      default: false,
    },
    rubberBand: {
      type: [Boolean, Object],
      default: false,
    },
    zoomInCustom: {
      type: [Boolean, Object],
      default: false,
    },
  },
  setup(props, { slots }) {
    const animation = new Map([
      ['bounceInDown', false],
      ['rubberBand', false],
      ['zoomInCustom', false],
    ])

    const r = (h, stack) => {
      if (stack.length) {
        const attrs = typeof stack[0].attrs === 'object' ? stack[0].attrs : {}
        return h(
          'div',
          {
            class: ['animate__animated', `animate__${stack[0].name}`],
            ...attrs,
          },
          [r(h, stack.slice(1))]
        )
      } else {
        return slots.default()
      }
    }
    return () => {
      return r(
        h,
        Array.from(animation.entries())
          .filter(([name]) => props[name])
          .map(([name]) => ({ name: name, attrs: props[name] }))
      )
    }
  },
}
</script>
<style lang="scss">
.test {
  display: block;
  @include cube(150px);
  background-color: theme(primary);
}
</style>
