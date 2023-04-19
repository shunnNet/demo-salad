<script setup>
import YTPlayer from '@/components/common/video/YTPlayer.vue'
import { computed, ref } from 'vue'
import { windowHeight, windowWidth } from '@/store/common.js'

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  previewImage: {
    type: String,
    default: '',
  },
})
// https://www.youtube.com/embed/Sd-Q4T6ecWI?origin=https%3A%2F%2Ftw.digisalad.cool&wmode=transparent&modestbranding=0&autohide=0&branding=0&controls=0&showinfo=0&autoplay=1&mute=1&rel=0&enablejsapi=1&widgetid=1

const playerOptions = computed(() => {
  return {
    controls: 0,
    autoplay: 1,
    loop: 1,
    mute: 1,
    showinfo: 0,
    playlist: props.videoId,
    hl: 'zh-TW',
    rel: 0,
    fs: 0,
    modestbranding: 1,
    ...props.options,
  }
})
const sleeping = ref(true)
let player

const handleReady = (event) => {
  player = event.target
  player.playVideo()
}
const handleStateChange = (event) => {
  if (event.data === 1 && sleeping.value) {
    sleeping.value = false
  }
}
const size = computed(() => {
  let width = windowWidth.value
  let height = windowHeight.value
  if ((windowWidth.value * 9) / 16 < windowHeight.value) {
    width = (height * 16) / 9
  }
  if ((windowHeight.value * 16) / 9 < windowWidth.value) {
    height = (width * 9) / 16
  }

  return {
    width,
    height,
  }
})
</script>
<template>
  <div class="video-background" :class="{ active: !sleeping }">
    <div
      class="video-background__player-wrap"
      :style="{
        width: size.width + 'px',
        height: size.height + 'px',
      }"
    >
      <YTPlayer
        class="video-background__player"
        :video-id="videoId"
        :options="playerOptions"
        @ready="handleReady"
        @state-change="handleStateChange"
      />
    </div>

    <div class="video-background__cover">
      <slot name="preview">
        <div
          class="video-background__cover-bg"
          :style="{
            backgroundImage: `url(${previewImage})`,
          }"
        />
      </slot>
    </div>
  </div>
</template>
<style lang="scss">
.video-background {
  @include cube(100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &__player-wrap {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__player {
    position: absolute;
    width: 120%;
    height: 120%;
  }
  &__cover {
    position: absolute;
    inset: 0;
    z-index: 1;
    transition: opacity 0.5s;
  }
  &__cover-bg {
    @include cube(100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}

.video-background.active {
  .video-background__cover {
    opacity: 0;
  }
}
</style>
