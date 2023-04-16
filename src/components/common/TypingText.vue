<script setup>
import { onMounted, ref, watch } from 'vue'
import { promiseWaterfall, sleep, repeat } from '@/utils/promise.js'

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  useCursor: {
    type: Boolean,
    default: false,
  },
  cursor: {
    type: String,
    default: '_',
    validator(val) {
      return ['|', '_', '｜', '＿'].includes(val)
    },
  },
  perText: {
    type: Number,
    default: 500,
  },
  repeatTimes: {
    type: Number,
    default: Infinity,
  },
  repeatDelay: {
    type: Number,
    default: 1000,
  },
  manual: {
    type: Boolean,
    default: false,
  },
  manualTrigger: {
    type: Boolean,
    default: false,
  },
})

const typingText = ref('')

/* eslint-disable */
const initManualValue = props.manual
/* eslint-enable */

const makeRun = () => {
  const [exec, stop] = promiseWaterfall(
    props.text.split('').map((charactor) => {
      return async () => {
        await sleep(props.perText)
        typingText.value += charactor
      }
    })
  )
  let execution
  return [
    () => {
      typingText.value = ''
      execution = exec()
    },
    async () => {
      await stop()
      await execution
      typingText.value = ''
    },
  ]
}

const runRepeat = () => {
  const [runTyping, stopTyping] = makeRun()
  const [run, stopRepeat] = repeat(
    runTyping,
    props.repeatTimes,
    props.repeatDelay
  )
  run()
  return async () => {
    await stopTyping()
    await stopRepeat()
  }
}

let stopSign = async () => {}

onMounted(() => {
  if (!props.manual) {
    stopSign = runRepeat()
  } else {
    if (props.manualTrigger) {
      const [runTyping, stopTyping] = makeRun()
      stopSign = stopTyping
      runTyping()
    }
  }
})

watch(
  () => props.manualTrigger,
  async (val) => {
    if (val === true) {
      await stopSign()
      const [runTyping, stopTyping] = makeRun()
      stopSign = stopTyping
      runTyping()
    } else {
      await stopSign()
    }
  }
)
</script>

<template>
  <span class="typing-text">
    <span v-text="typingText" />
    <span class="typing-text__cursor" v-if="useCursor"> {{ cursor }} </span>
  </span>
</template>

<style lang="scss">
.typing-text {
  white-space: pre-line;
  &__cursor {
    @include flicker(flicker-appear, 0.2s);
  }
}

@keyframes flicker-appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
</style>
