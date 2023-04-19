<script setup>
import SaladYTPlayer from '@/components/business/video/SaladYTPlayer.vue'
</script>
<template>
  <section class="section-about">
    <h2 class="section-about__title">
      <span class="section-about__title-text">ABOUT DIGISALAD</span>
    </h2>
    <SaladYTPlayer
      video-id="IeIRJ9jZ5Ro"
      class="section-about__movie"
      thumbnail="hq720"
    />
    <p class="section-about__description">
      Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
      ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam
      condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu
      tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id
      dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis
      dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
      consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus
      neque eros nec lacus. Cras lobortis molestie faucibus.
    </p>
    <div class="section-about__more">
      <span class="section-about__more-text"> VIEW MORE </span>
      <div class="section-about__more-line" />
    </div>
  </section>
</template>
<style lang="scss">
.section-about {
  background-color: #e5e5e5;
  padding: 0 20px;
  padding-top: 125px;
  padding-bottom: 286px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    position: relative;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 48px;

    text-align: center;
    font-weight: 700;
    letter-spacing: 3.64px;
    @include breakpoint('mobile') {
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 72px;
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
      background-image: url('@/assets/img/curly-primary.png');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &__movie {
    margin-bottom: 30px;
    &.salad-yt-player {
      width: 320px;
      height: 180px;
      @include breakpoint('mobile') {
        width: 475px;
        height: 270px;
      }
      @include breakpoint('laptop') {
        width: 958px;
        height: 540px;
      }
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
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.22px;
    background-color: theme(primary);
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
}
</style>
