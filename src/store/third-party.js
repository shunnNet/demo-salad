import { reactive } from 'vue'

export const thirdPartyScript = reactive({
  TPDirect: false,
  YT: false,
})

let loadYTIframe = null

export const loadYTIframeApi = () => {
  if (loadYTIframe) {
    return loadYTIframe
  }

  loadYTIframe = new Promise((resolve) => {
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

  return loadYTIframe
}
