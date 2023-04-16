export const delayNavigate = (href, delay = 500) => {
  setTimeout(() => {
    window.location.href = href
  }, delay)
}

export const loadFont = (src) => {
  const notoLink = document.createElement('link')

  notoLink.onload = function () {
    this.onload = null
    this.removeAttribute('media')
  }
  notoLink.href = src
  notoLink.rel = 'stylesheet'
  notoLink.media = 'print'

  document.head.appendChild(notoLink)
}
