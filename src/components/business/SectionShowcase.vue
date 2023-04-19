<script setup>
import { register } from 'swiper/element/bundle'
import { computed, ref } from 'vue'
import showcaseUrl01 from '@/assets/img/showcase-01.png'
import Chevron from '@/assets/svg/chevron.svg'

import HightlightText from '@/components/business/HightlightText.vue'

register()
const swiperRef = ref(null)
const handleClickNavigation = (direction) => {
  const swiper = swiperRef.value.swiper
  if (direction === 1) {
    swiper.slideNext()
  }
  if (direction === -1) {
    swiper.slidePrev()
  }
}

const showcaseItems = computed(() => {
  return [
    {
      id: 1,
      title: 'LP CLUB MOBILE APP',
      image: showcaseUrl01,
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
    },
    {
      id: 2,
      title: 'LP CLUB MOBILE APP',
      image: showcaseUrl01,
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
    },
    {
      id: 3,
      title: 'LP CLUB MOBILE APP',
      image: showcaseUrl01,
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
    },
    {
      id: 4,
      title: 'LP CLUB MOBILE APP',
      image: showcaseUrl01,
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
    },
  ]
})
const swiperIndex = ref(0)
const pager = computed(() => {
  const pageCount = `${showcaseItems.value.length}`.padStart(2, '0')
  const nowPage = `${swiperIndex.value}`.padStart(2, '0')

  return {
    count: pageCount,
    now: nowPage,
  }
})
const setSwiperIndex = (swiper) => {
  swiperIndex.value = swiper.activeIndex + 1
}
const handleSwiperIndexChange = (e) => setSwiperIndex(e.detail[0])
const handlerSwiperInited = (e) => setSwiperIndex(e.detail[0])
</script>
<template>
  <section class="section-showcase">
    <div class="section-showcase__wrap">
      <swiper-container
        ref="swiperRef"
        :slide-per-view="1"
        class="section-showcase__swiper"
        @activeindexchange="handleSwiperIndexChange"
        @afterinit="handlerSwiperInited"
      >
        <swiper-slide
          v-for="item in showcaseItems"
          :key="item.id"
          class="section-showcase__swiper-slide"
        >
          <div class="showcase">
            <img
              class="showcase__image"
              :src="item.image"
              width="540"
              height="540"
            />
            <div class="showcase__body">
              <div class="showcase__sub">HIGHLIGHTED SHOWCASE</div>
              <HightlightText>
                <span class="showcase__title">{{ item.title }}</span>
              </HightlightText>
              <p class="showcase__content">{{ item.content }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="section-showcase__view">
        <div class="section-showcase__view-text">VIEW PROJECT</div>
        <div class="section-showcase__view-line" />
      </div>
      <div class="section-showcase__controls">
        <div
          @click="handleClickNavigation(-1)"
          class="section-showcase__navigation section-showcase__navigation--prev"
        >
          <Chevron transform="rotate(180)" />
        </div>
        <div class="section-showcase__pager">
          <span class="section-showcase__pager-now"> {{ pager.now }} </span>
          <span class="section-showcase__pager-total"> {{ pager.count }} </span>
        </div>

        <div
          @click="handleClickNavigation(1)"
          class="section-showcase__navigation section-showcase__navigation--next"
        >
          <Chevron />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.section-showcase {
  @include radius($border-radius, [top-right top-left]);
  background-image: url('@/assets/img/bg-showcase.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 195px;
  padding-bottom: 260px;
  margin-bottom: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: theme(light);

  &__wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 40px;

    @include breakpoint('laptop') {
      max-width: 980px;
      padding: 0 90px;
    }

    @include breakpoint('desktop') {
      max-width: 1243px;
      padding: 0 103px;
    }

    position: relative;
  }
  &__swiper {
    @include max-box(600px);

    @include breakpoint('laptop') {
      height: 540px;
      max-width: unset;
      width: 100%;
    }

    @include breakpoint('desktop') {
      height: 540px;
    }

    &-slide {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .showcase {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 20px;
    @include breakpoint('mobile') {
      padding: 60px;
    }
    @include breakpoint('laptop') {
      width: 100%;
      flex-direction: row;
    }
    @include breakpoint('desktop') {
      align-items: flex-start;
      padding: 0;
    }

    &__image {
      border-radius: $border-radius;
      @include cube(180px);
      margin-bottom: 20px;
      @include breakpoint('laptop') {
        margin-bottom: 60px;
        @include cube(280px);
        align-items: center;
        margin-right: 60px;
        margin-bottom: 0;
      }
      @include breakpoint('desktop') {
        width: 540px;
        height: auto;
        align-items: flex-start;
        margin-right: 60px;
      }
    }
    .highlight-text {
      margin-left: 8px;
      margin-bottom: 20px;
      @include breakpoint('desktop') {
        margin-bottom: 40px;
      }
    }
    &__body {
      text-align: center;
      @include breakpoint('laptop') {
        text-align: left;
      }
      @include breakpoint('desktop') {
        padding-top: 60px;
      }
    }
    &__sub {
      font-weight: 700;
      font-size: 12px;
      line-height: 19px;
      letter-spacing: 1.8px;
      margin-bottom: 10px;
      @include breakpoint('desktop') {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.22px;
        margin-bottom: 20px;
      }
    }
    &__title {
      text-align: center;
      position: relative;
      font-size: 22px;
      line-height: 28px;
      letter-spacing: 1.2px;
      font-weight: 700;

      @include breakpoint('laptop') {
        font-size: 28px;
        line-height: 36px;
        letter-spacing: 2.22px;
      }
      @include breakpoint('desktop') {
        font-size: 32px;
        line-height: 39px;
        letter-spacing: 3.64px;
      }
      &::after {
        content: '';
        @include circle(10px);
        display: block;
        position: absolute;
        bottom: 0.4em;
        right: -20px;
        transform: translateX(100%);
        background-color: theme(third);
      }
    }
    &__content {
      font-size: 14px;
      height: 140px;
      @include text-truncate-multi-line(5);
      @include breakpoint('mobile') {
        height: auto;
        font-size: 16px;
      }
    }
  }
  &__view {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.22px;
    background-color: theme(primary);
    color: theme(light);
    user-select: none;
    cursor: pointer;
    display: inline-flex;
    margin: 0 auto;
    align-items: center;

    @include breakpoint('mobile') {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 20%);
      z-index: 5;
    }
    &-text {
      margin-right: 15px;
    }
    &-line {
      width: 35px;
      height: 2px;
      background-color: theme(light);
    }
    padding: 30px 16px;
    @include breakpoint('desktop') {
      padding: 60px 33px;
      &-line {
        width: 70px;
      }
    }
  }
  &__navigation {
    @include circle(53px);
    transform: scale(75%);

    background-color: theme(primary);
    color: theme(light);
    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;
    cursor: pointer;
    &--prev {
      left: 30px;
    }
    &--next {
      right: 30px;
    }
    @include breakpoint('mobile') {
      transform: scale(75%) translateY(-50%);
      position: absolute;
      top: 50%;
      z-index: 100;
    }
    @include breakpoint('laptop') {
      &--prev {
        left: 0;
      }
      &--next {
        right: 0;
      }
    }
    @include breakpoint('desktop') {
      transform: translateY(-50%);
    }
  }

  &__pager {
    @include cube(48px);
    position: relative;

    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
    letter-spacing: 2.22px;
    margin: 0 20px;

    @include breakpoint('mobile') {
      top: 0;
      margin: 0;
      position: absolute;
      right: 15%;
    }

    &-now {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-25%);
    }
    &-total {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(25%);
    }
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 48px;
      background-color: theme(primary);
      transform: rotateZ(-45deg);
      top: 45%;
    }
    @include breakpoint('laptop') {
      right: 20px;
      top: -20px;
    }
  }
  &__controls {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
