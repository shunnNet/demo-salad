<script setup></script>
<template>
  <section class="section-clients">
    <h2 class="section-clients__title">
      <span class="section-clients__title-text">ABOUT DIGISALAD</span>
    </h2>
    <p class="section-clients__description">
      Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
      ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam
      condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu
      tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id
      dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis
      dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
      consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus
      neque eros nec lacus. Cras lobortis molestie faucibus.
    </p>
    <div class="section-clients__img"></div>
  </section>
</template>
<style lang="scss">
.section-clients {
  background-color: theme(light);
  padding: 0 20px;
  padding-top: 386px;
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
  &__description {
    @include max-box(100%);
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 35px;
    @include breakpoint('mobile') {
      max-width: 800px;
    }
    @include breakpoint('laptop') {
      max-width: 1007px;
    }
  }
  &__img {
    background-image: url('@/assets/img/client-list.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    max-width: 1040px;
    width: 100%;
    height: 360px;
    @include breakpoint('tablet') {
      height: 720px;
    }
  }
}
</style>
