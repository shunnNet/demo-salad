// import { globalLoading } from '@/store/common.js'
import { delayNavigate } from '@/utils/browser.js'

export const useLoadingNavigate = () => {
  const loadingNavigate = (href) => {
    // 需要在可以解除 bfcache 的環境才能用
    // https://codingshower.com/disable-bfcache/
    // setTimeout(() => {
    //   globalLoading.value = true
    // }, 300)
    delayNavigate(href)
  }

  return { loadingNavigate }
}
