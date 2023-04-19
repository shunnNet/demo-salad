<script setup>
import VideoBackground from '@/components/common/video/VideoBackground.vue'
import previewImageUrl from '@/assets/img/section-intro-bg.png'
import ComposingAnime from '../common/animation/ComposingAnime.vue'
import HightlightText from '@/components/business/HightlightText.vue'
import Logo from '@/assets/svg/logo.svg'
</script>
<template>
  <div class="section-intro">
    <section class="section-intro__wrap">
      <ComposingAnime
        slide-in-left
        :fade-in="{ style: { animationDelay: '0.5s' } }"
      >
        <div class="section-intro__slogan">
          <Logo class="section-intro__slogan-logo" />
          <h2 class="section-intro__slogan-title">
            WE CREATE<br />
            AMAZING<br />
            <HightlightText :animate="false">
              <span class="point"> DIGITAIL EXPERIENCES </span>
            </HightlightText>
          </h2>
        </div>
      </ComposingAnime>
      <footer class="section-intro__footer">
        <img
          src="@/assets/img/salad.png"
          class="section-intro__footer-icon"
          width="65"
          height="65"
        />
        <div class="section-intro__footer-taste">TASTE US NOW!</div>
      </footer>
      <aside class="section-intro__aside">
        <ComposingAnime
          :slide-in-left="{ style: { animationDelay: '0.5s' } }"
          :fade-in="{ style: { animationDelay: '0.8s' } }"
        >
          <div class="section-intro__aside-text">DIGITAL AGENCY</div>
        </ComposingAnime>
      </aside>
      <div class="section-intro__down-line"></div>
      <div class="section-intro__down-line-stretch"></div>
    </section>
    <div class="section-intro__bg-wrap">
      <ComposingAnime fade-in>
        <VideoBackground
          video-id="8_4JRK4QkqU"
          class="section-intro__bg"
          :preview-image="previewImageUrl"
        />
      </ComposingAnime>
    </div>
  </div>
</template>
<style lang="scss">
.section-intro {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
  color: theme(light);
  &__bg-wrap {
    position: absolute;
    top: 0;
    @include radius($border-radius, [top-right top-left]);
    @include cube(100%);
    filter: brightness(0.5);
    background-color: #000;
    z-index: 0;
  }
  &__bg {
    @include cube(100%);
    position: absolute;
    top: 0;
  }
  &__wrap {
    position: relative;
    z-index: 1;
    height: 100%;
  }
  &__slogan {
    color: theme(light);
    padding-top: 20vh;
    padding-left: 5vw;

    @include breakpoint('laptop') {
      padding-top: 180px;
      padding-left: 10vw;
    }
    @include breakpoint('desktop') {
      padding-left: 226px;
    }
    &-logo {
      position: relative;
      left: -6px;
      margin-bottom: 34px;
    }
    &-title {
      font-size: 20px;
      line-height: 60px;
      font-weight: 700;
      letter-spacing: 5px;

      @include breakpoint('tablet') {
        font-size: 38px;
        line-height: 70px;
        letter-spacing: 9.17px;
      }

      .point {
        &::after {
          content: '';
          @include circle(10px);
          display: block;
          position: absolute;
          bottom: 0.6em;
          right: -10px;
          transform: translateX(100%);
          background-color: theme(third);
        }
      }
    }
  }
  &__footer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 75px;
    text-align: center;
    &-icon {
      width: 65px;
      height: 65px;
      vertical-align: bottom;
      margin-bottom: 10px;
    }
    &-taste {
      font-size: 14px;
      line-height: 17px;
      font-weight: 700;
      letter-spacing: 2px;
      color: theme(light);
    }
  }
  &__down-line {
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 44px;
    width: 1px;
    background-color: theme(light);

    z-index: 2;
  }
  &__down-line-stretch {
    position: absolute;
    left: 50%;
    bottom: -86px;
    height: 86px;
    width: 1px;
    background-color: #808080;
    z-index: 1;
  }
  &__aside {
    display: none;
    @include breakpoint('laptop') {
      position: absolute;
      top: 40%;
      transform: rotate(-90deg);
      display: block;
      left: -90px;
    }
    @include breakpoint('desktop') {
      left: -70px;
    }
    &-text {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 19px;
      font-weight: 700;
      letter-spacing: 2.22px;
      color: theme(light);
      &::before {
        content: '';
        width: 113px;
        height: 2px;
        background-color: theme(light);
        margin-right: 24px;
      }
    }
  }
}
</style>
