import { reactive } from 'vue'

export const thirdPartyScript = reactive({
  TPDirect: false,
  YT: false,
})

export const loadYTIframeApi = () => {
  if (!process.browser) {
    return Promise.resolve(null)
  }

  return new Promise((resolve) => {
    if (thirdPartyScript.YT) {
      resolve(window.YT)
    } else {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
      window.onYouTubeIframeAPIReady = () => {
        thirdPartyScript.YT = true
        resolve(window.YT)
      }
    }
  })
}
