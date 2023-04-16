import { useBreakpoints } from '@vueuse/core'

export const breakpoints = useBreakpoints({
  desktopWide: 1920,
  desktop: 1440,
  laptop: 1024,
  tablet: 768,
  mobile: 576,
  mobileMini: 375,
})

export const {
  desktopWide: overDesktopWide,
  desktop: overDesktop,
  laptop: overLaptop,
  tablet: overTablet,
  mobile: overMobile,
  mobileMini: overMobileMini,
} = breakpoints
