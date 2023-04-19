import { reactive, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

export const globalLoading = ref(false)
export const { height: windowHeight, width: windowWidth } = useWindowSize({
  includeScrollbar: false,
})

export const menu = reactive({
  show: false,
})
