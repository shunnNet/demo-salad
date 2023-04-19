<script setup>
import MenuIcon from '@/assets/svg/menu.svg'
import Logo from '@/assets/svg/logo.svg'
import { computed } from 'vue'
import LineCross from '@/components/common/animation/LineCross.vue'
import AppearAnimation from '@/components/common/animation/AppearAnimation.vue'
const props = defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
  menuOpen: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['open-menu'])

const stateClasses = computed(() => {
  return {
    'navbar--transparent': props.transparent,
    'navbar--menu-open': props.menuOpen,
  }
})

const handleMenuToggle = (val) => {
  emit('toggle-menu', val)
}
</script>
<template>
  <nav class="navbar" :class="stateClasses">
    <div class="logo">
      <Logo />
    </div>
    <div>
      <transition name="v-appear" mode="out-in">
        <div v-if="!menuOpen" class="navbar__right-box">
          <div class="navbar__feat-button">START YOUR PROJECT</div>
          <MenuIcon class="navbar__menu-icon" @click="handleMenuToggle(true)" />
        </div>
        <div v-else class="navbar__right-box">
          <AppearAnimation>
            <LineCross
              class="navbar__menu-icon"
              @click="handleMenuToggle(false)"
            />
          </AppearAnimation>
        </div>
      </transition>
    </div>
  </nav>
</template>
<style lang="scss">
.navbar {
  width: 100%;

  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: theme(light);
  color: theme(dark);
  @include breakpoint('mobile') {
    padding: 30px 60px;
    padding-left: 80px;
  }

  &__right-box {
    display: flex;
    align-items: center;
  }

  &__feat-button {
    @include gradient-directional(#4ee5ea, #26d0a8, 90deg);

    border-radius: 24px;
    cursor: pointer;
    user-select: none;
    margin-right: 20px;
    color: theme(light);
    font-size: 14px;

    padding: 6px 10px;
    @include breakpoint('mobile') {
      padding: 12px 10px;
      margin-right: 44px;
    }
  }
  .logo {
    transition: 0.2s;
    color: theme(primary);
    width: 40px;
    height: 18px;
    @include breakpoint('mobile') {
      width: 120px;
      height: 53px;
    }
    svg {
      transform: scale(40%);
      @include breakpoint('mobile') {
        transform: scale(60%);
      }
      transform-origin: left top;
    }
  }
  &__menu-icon {
    cursor: pointer;
    user-select: none;
  }
}

.navbar--transparent {
  padding: 40px 60px;
  background-color: transparent;
  color: theme(light);

  .logo {
    opacity: 0;
  }
}

.navbar--menu-open {
  padding: 40px 60px;
  background-color: transparent;
  color: theme(light);
  .logo {
    color: theme(light);
    display: block;
    opacity: 1;
  }
}
</style>
