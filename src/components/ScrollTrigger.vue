<script setup>
import { useWindowScroll } from '@vueuse/core'
import { computed, onMounted, ref, watch } from 'vue'
import { minmax } from '@/utils/math.js'
import { useFrame } from '@/composition/useProgressor.js'
import { windowHeight } from '@/store/common.js'

const { y } = useWindowScroll()

const emit = defineEmits(['state-change', 'frame-change'])

const props = defineProps({
  length: {
    type: [Number, String, Function],
    default: 'element',
  },
  start: {
    type: [Number, String, Function],
    default: 'element',
  },
  frameRate: {
    type: Number,
    default: 24,
  },
  tag: {
    type: String,
    default: 'div',
  },
})

let orbital = ref(null)

const handleLengthUnit = (value) => {
  if (value === 'element') {
    return orbital.value.clientHeight
  }
  if (value === 'window') {
    return windowHeight.value
  }
  if (typeof value === 'number' && value > 0) {
    return value
  }
  if (typeof value === 'function') {
    return value(orbital.value, windowHeight.value)
  }

  return value
}

const length = computed(() => {
  if (!orbital.value) {
    return 1
  }
  return handleLengthUnit(props.length)
})

// TODO: orbital.value.offsetTop: with parent has position: relative
// TODO: recalculate start position when full document height change, or it will be affected by display:none
const defineStartPosition = () =>
  orbital.value.offsetTop - windowHeight.value + handleLengthUnit(props.start)

let startPosition = ref(0)

onMounted(() => {
  startPosition.value = defineStartPosition()
})
window.addEventListener('resize', () => {
  startPosition.value = defineStartPosition()
})

const progress = computed(() =>
  minmax(0, ((y.value - startPosition.value) / length.value) * 100, 100)
)
const isActive = computed(() => progress.value > 0)

watch(isActive, (val) => {
  emit('state-change', val)
})

const { frame } = useFrame(progress, length, props.frameRate)
emit('frame-change', frame.value.index)

watch(
  () => frame.value.index,
  (val) => {
    emit('frame-change', val)
  }
)
</script>

<template>
  <component :is="tag" ref="orbital" :progress="progress" :length="length">
    <slot :progress="progress" :is-active="progress > 0" :frame="frame" />
  </component>
</template>
