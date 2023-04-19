<script setup>
import { computed } from 'vue'
import lettuceUrl from '@/assets/img/lettuce.png'
import tomatoUrl from '@/assets/img/tomato.png'
import cheeseUrl from '@/assets/img/cheese.png'
import cucumberUrl from '@/assets/img/cucumber.png'
import carrotUrl from '@/assets/img/carrot.png'
import DropAnimation from '@/components/common/animation/DropAnimation.vue'

const brickItems = computed(() => {
  return [
    {
      theme: 'lettuce',
      image: {
        src: lettuceUrl,
        width: 47,
        height: 66,
      },
      slogan: 'EMPOWERING BRANDS',
      title: 'ABOUT US',
    },
    {
      theme: 'tomato',
      image: {
        src: tomatoUrl,
        width: 60,
        height: 60,
      },
      slogan: 'CASE STUDIES',
      title: 'WORKS',
    },
    {
      theme: 'cheese',
      image: {
        src: cheeseUrl,
        width: 82,
        height: 42,
      },
      slogan: 'BE COOL WITH US',
      title: 'CAREERS',
    },
    {
      theme: 'cucumber',
      image: {
        src: cucumberUrl,
        width: 38,
        height: 73,
      },
      slogan: 'OUR STRATEGIES',
      title: 'INSIGHTS',
    },
    {
      theme: 'carrot',
      image: {
        src: carrotUrl,
        width: 36,
        height: 67,
      },
      slogan: 'AREAS OF EXPERTISE',
      title: 'SERVICES',
    },
    {
      theme: 'white',
      slogan: 'START YOUR JOURNEY WITH US',
      title: 'CONTACT',
    },
  ]
})
</script>
<template>
  <div class="menu">
    <div class="menu__wrap">
      <DropAnimation
        v-for="(b, i) in brickItems"
        :key="b.title"
        class="brick-space"
        :delay="i * 0.1"
      >
        <div :class="`brick brick--${b.theme}`">
          <div v-if="b.image" class="brick__image">
            <img
              :src="b.image.src"
              :width="b.image.width"
              :height="b.image.height"
            />
          </div>
          <div class="brick__content">
            <div class="brick__slogan">{{ b.slogan }}</div>
            <div class="brick__title">{{ b.title }}</div>
          </div>
        </div>
      </DropAnimation>
    </div>
  </div>
</template>
<style lang="scss">
.menu {
  position: fixed;
  inset: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  overflow-y: auto;
  animation-name: appear;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  @include gradient-directional(rgba(#585880, 0.9), rgba(#26c6d0, 0.9), 180deg);
  @include breakpoint('desktop') {
  }
  &__wrap {
    @include max-box(800px);
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr;
    justify-content: center;
    padding: 94px 20px;
    padding-top: 160px;
    @include breakpoint('tablet') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include breakpoint('desktop') {
      padding: 0;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;

      max-width: 1130px;
      height: 780px;
      gap: 0;
    }
  }
  .brick {
    @include cube(100%);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: $border-radius;
    padding: 72px 36px;
    color: theme(light);
    display: flex;
    align-items: flex-end;

    &__image {
      width: 60px;
      margin-right: 12px;
      img {
        max-width: 100%;
        height: auto;
      }
    }

    &__slogan {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 1.8px;
      font-weight: 300;
      margin-bottom: 9px;
    }
    &__title {
      position: relative;
      display: inline-block;
      font-size: 32px;
      line-height: 39px;
      font-weight: 700;
      letter-spacing: 3.64px;
      &::after {
        content: '';
        @include circle(10px);
        display: block;
        position: absolute;
        bottom: 0.25em;
        right: -10px;
        transform: translateX(100%);
        background-color: theme(third);
      }
    }
  }
  .brick--lettuce {
    background-color: rgba(theme(primary), 0.8);
    background-image: url('@/assets/img/brick-01.png');
    @include breakpoint('desktop') {
      width: 380px;
      height: 210px;
    }
  }
  .brick--tomato {
    background-image: url('@/assets/img/brick-red.png');
    background-color: rgba(#ee6c8a, 0.8);
    @include breakpoint('desktop') {
      width: 380px;
      height: 320px;
    }

    .brick__title::after {
      background-color: theme(primary);
    }
  }
  .brick--cheese {
    background-image: url('@/assets/img/brick-yellow.png');
    background-color: rgba(#e6a94e, 0.8);
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    @include breakpoint('desktop') {
      width: 290px;
      height: 430px;
    }
    .brick__image {
      margin-bottom: 12px;
      margin-right: 0;
    }
  }
  .brick--cucumber {
    background-image: url('@/assets/img/brick-green.png');
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background-color: rgba(#26d0a8, 0.8);
    @include breakpoint('desktop') {
      width: 290px;
      height: 282px;
    }
    .brick__image {
      margin-bottom: 12px;
      margin-right: 0;
    }
  }
  .brick--carrot {
    background-image: url('@/assets/img/brick-black.png');

    background-color: rgba(#585880, 0.8);
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    @include breakpoint('desktop') {
      width: 380px;
      height: 320px;
    }

    .brick__image {
      margin-bottom: 12px;
      margin-right: 0;
    }
  }
  .brick--white {
    background-color: theme(light);

    @include breakpoint('desktop') {
      width: 380px;
      height: 210px;
    }

    .brick__slogan {
      color: theme(dark);
    }
    .brick__title {
      color: theme(primary);
    }
  }

  .brick-space {
    @include breakpoint('desktop') {
      &:nth-child(1) {
        margin-right: 40px;
        margin-bottom: 40px;
      }
      &:nth-child(2) {
        margin-right: 40px;
      }
      &:nth-child(3) {
        margin-right: 40px;
        margin-bottom: 40px;
      }
      &:nth-child(4) {
        margin-right: 40px;
      }
      &:nth-child(5) {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
