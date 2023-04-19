<script setup>
import { useWindowScroll } from '@vueuse/core'
import { windowHeight, menu } from '@/store/common.js'
import Menu from '@/components/LayoutMenu.vue'
import LayoutNavbar from '@/components/layout/LayoutNavbar.vue'
import { computed, watch } from 'vue'

const { y } = useWindowScroll()
const menuState = computed(() => {
  return {
    transparent: !(y.value > windowHeight.value * 0.5),
    menuOpen: menu.show,
  }
})

const handleOpenMenu = (toOpen) => {
  menu.show = toOpen
}

watch(
  () => menu.show,
  (isShow) => {
    const scrollElement = document.scrollingElement || document.body
    if (isShow) {
      scrollElement.classList.add('overflow-hidden')
    } else {
      scrollElement.classList.remove('overflow-hidden')
    }
  }
)
</script>
<template>
  <LayoutNavbar
    v-bind="menuState"
    class="layout-navbar"
    @toggle-menu="handleOpenMenu"
  />

  <Menu v-if="menu.show" class="layout-menu" />

  <slot></slot>
</template>
<style lang="scss">
.layout-navbar.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.layout-menu.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9995;
}
</style>
