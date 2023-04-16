import { useBreakpoints } from '@vueuse/core'

export const breakpoints = useBreakpoints({
  desktop: 1440,
  laptop: 1024,
  tablet: 768,
  mobile: 576,
})

export const {
  desktop: overDesktop,
  laptop: overLaptop,
  tablet: overTablet,
  mobile: overMobile,
} = breakpoints
