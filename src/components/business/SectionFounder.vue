<script setup>
import ScrollTrigger from '@/components/ScrollTrigger.vue'
</script>
<template>
  <ScrollTrigger v-slot="{ isActive }">
    <div class="section-founder-wrap">
      <div class="section-founder">
        <div
          class="section-founder__inner slide-left-appear-transition"
          :class="{ active: isActive }"
        >
          <figure class="section-founder__figure">
            <img
              class="section-founder__figure-img"
              src="@/assets/img/TonyNG.png"
              alt="Digi Salad Founder Tony NG"
            />
            <figcaption>
              <span class="section-founder__figure-name">TONY NG</span>
              <span class="section-founder__figure-title">
                Founder & Creative Director
              </span>
            </figcaption>
          </figure>
          <div class="section-founder__body">
            <img
              src="@/assets/svg/icon-quote.svg?url"
              class="section-founder__quote"
              width="90"
              height="64"
              loading="lazy"
            />
            <p class="section-founder__description">
              A great digital work isn’t about designing beautiful pages purely.
              It is about context - how do we deliver the
              <span class="color-secondary bold"
                >right experience to the right person at the right time.</span
              >
              The most important thing is that your work can engage customers at
              anytime, anywhere and let users experience an entire amazing
              digital journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  </ScrollTrigger>
</template>
<style lang="scss">
.section-founder-wrap {
  position: absolute;
  width: 100%;
  height: 740px;
  padding-right: 20px;
  @include breakpoint('tablet') {
    height: 598px;
    padding-right: 70px;
  }
  @include breakpoint('desktop') {
    padding-right: 140px;
  }
}
.section-founder {
  @include radius($border-radius, [top-left]);
  @include cube(100%);
  position: relative;
  top: -400px;
  background-image: url('@/assets/img/bg-founder.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  color: theme(light);
  padding: 40px 40px;
  @include breakpoint('tablet') {
    top: -300px;
    padding: 60px;
  }

  @include breakpoint('desktop') {
    padding: 100px;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include breakpoint('desktop') {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
  }

  &__figure {
    @include max-box(250px);
    text-align: center;
    white-space: nowrap;
    margin-bottom: 40px;
    @include breakpoint('desktop') {
      margin-bottom: 0;
      margin-right: 88px;
    }
    &-img {
      @include circle(160px);
      margin-bottom: 20px;
      @include breakpoint('desktop') {
        margin-bottom: 40px;
        @include circle(204px);
      }
    }
    &-name {
      display: block;
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 2px;
      margin-bottom: 8px;
    }
    &-title {
      display: block;
      font-size: 16px;
      line-height: 16px;
      font-weight: 400;
      letter-spacing: 2px;
      font-weight: 400;
      font-style: italic;
    }
  }
  &__body {
    flex: 0 1 734px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__quote {
    width: 45px;
    height: 32px;
    margin-bottom: 16px;
    @include breakpoint('desktop') {
      width: 90px;
      height: 64px;
      margin-bottom: 26px;
    }
  }
  &__description {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 2px;
    font-weight: 400;
    text-align: center;

    @include breakpoint('mobile') {
      font-size: 18px;
      line-height: 36px;
    }
    @include breakpoint('desktop') {
      font-size: 22px;
      line-height: 48px;
    }
  }
}
</style>
