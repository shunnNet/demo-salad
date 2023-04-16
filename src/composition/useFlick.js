import { ref } from 'vue'

export const useFlick = (props) => {
  const isFlicking = ref(false)

  const flick = () => {
    if (props.flick) {
      isFlicking.value = true

      // 暫時的，需要在可以解除 bfcache 的環境才能不用 setTimeout
      setTimeout(() => {
        isFlicking.value = false
      }, 500)
    }
  }

  return {
    flick,
    isFlicking,
  }
}
