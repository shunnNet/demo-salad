<script setup>
import FeatCard from '@/components/business/card/FeatCard.vue'
import HightlightText from '@/components/business/HightlightText.vue'

import { computed } from 'vue'
import lettuceUrl from '@/assets/img/lettuce.png'
import tomatoUrl from '@/assets/img/tomato.png'
import cheeseUrl from '@/assets/img/cheese.png'
import cucumberUrl from '@/assets/img/cucumber.png'
import orangeUrl from '@/assets/img/orange.png'
import kiwiUrl from '@/assets/img/kiwi.png'
import watermelonUrl from '@/assets/img/watermelon.png'
import cornUrl from '@/assets/img/corn.png'
import appleUrl from '@/assets/img/apple.png'
const cardList = computed(() => {
  return [
    {
      icon: lettuceUrl,
      title: 'UX Design',
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    },
    {
      icon: tomatoUrl,
      title: 'UI Design',
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    },
    {
      icon: cheeseUrl,
      title: 'WEBSITE\nDEVELOPMENT',
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    },
    {
      icon: cucumberUrl,
      title: 'MOBILE APP\nDEVELOPMENT',
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    },
    {
      icon: orangeUrl,
      title: 'ECOMMERCE',
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    },
    {
      icon: kiwiUrl,
      title: 'CUSTOMER LOYALTY',
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    },
    {
      icon: watermelonUrl,
      title: 'DIGITAL\nTRANSFORMATION',
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    },
    {
      icon: cornUrl,
      title: 'DIGITAL\nMARKETING',
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    },
    {
      icon: appleUrl,
      title: 'BRANDING',
      content:
        'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    },
  ]
})
</script>
<template>
  <section class="section-ingredients">
    <h2 class="section-ingredients__title">
      <span class="section-ingredients__title-text">OUR INGRADIENTS</span>
    </h2>
    <p class="section-ingredients__description">
      Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
      ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam
      condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu
      tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id
      dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis
      dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
      consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus
      neque eros nec lacus. Cras lobortis molestie faucibus.
    </p>
    <div class="section-ingredients__more">
      <span class="section-ingredients__more-text"> VIEW MORE </span>
      <div class="section-ingredients__more-line" />
    </div>
    <div class="section-ingredients__grid">
      <FeatCard v-for="card in cardList" :key="card.title" :info="card" />
    </div>
    <HightlightText theme="secondary" tag="div">
      <span class="section-ingredients__footer-hightlight">
        <span class="d-none d-inline-mb"> VIEW </span>
        MORE DIGISALAD’S INGRADIENTS
      </span>
    </HightlightText>
  </section>
</template>
<style lang="scss">
.section-ingredients {
  background-color: theme(primary);
  color: theme(light);
  padding: 0 20px;
  padding-top: 320px;
  padding-bottom: 433px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    position: relative;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;

    text-align: center;
    font-weight: 700;
    letter-spacing: 3.64px;
    @include breakpoint('mobile') {
      font-size: 28px;
      line-height: 34px;
    }
    &-text {
      position: relative;
      display: block;
      margin-bottom: 9px;
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
    &::after {
      content: '';
      display: block;
      position: absolute;
      height: 13px;
      left: -25px;
      right: -35px;
      background-image: url('@/assets/img/curly-primary-dark.png');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  &__description {
    @include max-box(100%);
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 30px;
    @include breakpoint('mobile') {
      max-width: 800px;
    }
    @include breakpoint('laptop') {
      max-width: 1007px;
    }
  }
  &__more {
    padding: 34px 24px;
    margin-bottom: 85px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.22px;
    background-color: theme(primary-dark-01);
    color: theme(light);
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    &-text {
      margin-right: 15px;
    }
    &-line {
      width: 52px;
      height: 2px;
      background-color: theme(light);
    }
  }
  &__grid {
    @include max-box(100%);
    display: grid;
    grid-template-columns: minmax(320px, 360px);
    justify-content: center;
    gap: 50px;
    margin-bottom: 40px;

    @include breakpoint('tablet') {
      max-width: 800px;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      margin-bottom: 102px;
    }

    @include breakpoint('desktop') {
      max-width: 1135px;
      grid-template-columns: repeat(3, 1fr);
      gap: 60px 50px;
    }
  }
  &__footer-hightlight {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 1px;

    @include breakpoint('mobile') {
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 2px;
    }
  }
}
</style>
