<script setup>
import ScrollTrigger from '../ScrollTrigger.vue'
</script>
<template>
  <ScrollTrigger v-slot="{ isActive }" :start="100" class="section-awards-wrap">
    <section class="section-awards">
      <div class="section-awards__body">
        <h2 class="section-awards__title">
          <span class="section-awards__title-text">AWARDS</span>
        </h2>
        <p class="section-awards__description">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc.
        </p>
      </div>
      <div
        class="section-awards__list slide-right-appear-transition"
        :class="{ active: isActive }"
      >
        <img
          class="img--fluid"
          v-for="i in 4"
          :key="i"
          src="@/assets/img/awards-1.png"
        />
      </div>
    </section>
  </ScrollTrigger>
</template>
<style lang="scss">
.section-awards-wrap {
  position: relative;
  width: 100%;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: -240px;
    width: 50%;

    height: 530px;

    background-color: theme(light);
    z-index: 0;
    border-bottom-right-radius: $border-radius;

    @include breakpoint('tablet') {
      top: -216px;
      height: 500px;
    }

    @include breakpoint('laptop') {
      height: 432px;
    }
  }
}
.section-awards {
  @include radius($border-radius, [top-right]);
  @include max-box(1244px);
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  top: -240px;
  height: 530px;
  width: 93%;
  background-color: theme(light);
  padding: 40px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include breakpoint('tablet') {
    top: -216px;
    height: 500px;
    padding: 65px 70px;
  }

  @include breakpoint('laptop') {
    flex-direction: row;
    height: 432px;
    padding: 65px 70px;
  }
  @include breakpoint('desktop') {
    width: 100%;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 15px;

    @include breakpoint('tablet') {
      margin-bottom: 30px;
    }

    @include breakpoint('laptop') {
      flex: 0 0 416px;
      margin-right: 37px;
      align-items: flex-start;
    }
  }
  &__title {
    position: relative;
    display: inline-block;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 31px;
    text-align: center;
    font-weight: 700;
    letter-spacing: 3.64px;

    @include breakpoint('laptop') {
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 31px;
      margin-left: 25px;
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
      background-size: 369px;
    }
  }
  &__description {
    @include max-box(100%);
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: center;

    @include breakpoint('mobile') {
      max-width: 800px;
    }
    @include breakpoint('laptop') {
      text-align: left;
      max-width: 1007px;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 142px);
    grid-template-rows: repeat(2, 54px);
    @include breakpoint('mobile') {
      grid-template-columns: repeat(2, 213px);
      grid-template-rows: repeat(2, 81px);
    }

    @include breakpoint('desktop') {
      grid-template-columns: repeat(2, 283px);
      grid-template-rows: repeat(2, 108px);
    }
  }
}
</style>
