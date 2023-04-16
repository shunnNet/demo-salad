<template>
  <div class="jkb-yt-player" :class="playerThemeClass">
    <YTPlayer
      class="jkb-yt-player__player"
      :video-id="videoId"
      :options="playerOptions"
      @ready="handleReady"
      @state-change="handleStateChange"
    />
    <div
      class="jkb-yt-player__cover"
      v-if="sleeping"
      @click="handlePlay"
      :style="{ backgroundImage: `url(${previewImage})`, ...buttonPlacement }"
    >
      <div class="jkb-yt-player__button" :class="buttonThemeClass">
        <div class="jkb-yt-player__play-icon" v-show="!loading" />
        <div class="jkb-yt-player__loading" v-show="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@nuxtjs/composition-api'
import YTPlayer from '../video/YTPlayer.vue'
export default {
  name: 'JkbYTPlayer',
  components: {
    YTPlayer
  },
  props: {
    videoId: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      /* istanbul ignore next reason: hard to reach in e2e*/
      default() {
        return {}
      }
    },
    playerTheme: {
      type: String,
      default: '',
      validator: (val) => ['', 'small'].includes(val)
    },
    placement: {
      type: Array,
      default: () => ['center', 'center']
    },
    buttonTheme: {
      type: String,
      default: 'circle',
      validator: (val) => ['circle', 'round'].includes(val)
    },
    // available value: https://stackoverflow.com/a/20542029/10536311
    // 圖片不是每個尺寸都有，請嘗試
    thumbnail: {
      type: String,
      default: '0'
    }
  },
  setup(props) {
    const sleeping = ref(true)
    const loading = ref(false)
    const previewImage = computed(() => {
      return `https://i.ytimg.com/vi/${props.videoId}/${props.thumbnail}.jpg`
    })

    const playerOptions = computed(() => {
      return {
        controls: 1,
        autoplay: 0,
        loop: 0,
        hl: 'zh-TW',
        rel: 0,
        fs: 0,
        modestbranding: 1,
        ...props.options
      }
    })
    let player

    const handleReady = (event) => {
      player = event.target
    }

    const handlePlay = () => {
      if (player && sleeping.value) {
        loading.value = true
        player.playVideo()
      }
    }
    const handleStateChange = (event) => {
      if (event.data === 1 && sleeping.value) {
        sleeping.value = false
      }
    }

    const resolvePlacement = (val) => {
      switch (val) {
        case 'center':
          return 'center'
        case 'start':
          return 'flex-start'
        case 'end':
          return 'flex-end'
        default:
          return 'center'
      }
    }
    const buttonPlacement = computed(() => {
      const resolved = props.placement.map(resolvePlacement)
      return {
        'justify-content': resolved[0],
        'align-items': resolved[1]
      }
    })

    const buttonThemeClass = computed(() => {
      return {
        [`jkb-yt-player__button--${props.buttonTheme}`]: true,
        'jkb-yt-player__button--loading': loading.value
      }
    })

    const playerThemeClass = computed(() => {
      return props.playerTheme ? `jkb-yt-player--${props.playerTheme}` : ''
    })

    return {
      playerOptions,
      sleeping,
      loading,
      handleReady,
      handlePlay,
      handleStateChange,
      previewImage,
      buttonPlacement,
      buttonThemeClass,
      playerThemeClass
    }
  }
}
</script>

<style lang="scss">
.jkb-yt-player {
  position: relative;
  width: 760px;
  height: 500px;
  background-color: #000;
  @include breakpoint('tablet') {
    width: 95%;
    height: 500px;
  }
  @include breakpoint('mobile') {
    height: 250px;
  }
  &__player {
    width: 100% !important;
    height: 100% !important;
  }

  &__cover {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #000;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    &:hover {
      .play-button {
        background-color: rgba(115, 133, 159, 0.5);
        transition: all 0s;
      }
    }
  }

  &__button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    background-color: rgba(43, 51, 63, 0.7);
    transition: all 0.4s;

    &--circle {
      @include circle(50px);
    }
  }
  &__play-icon {
    content: '';
    position: relative;
    left: 2px;
    width: 0;
    height: 0;
    border-top: 9px solid transparent;
    border-left: 18px solid #fff;
    border-bottom: 9px solid transparent;
  }

  &__loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 6px solid transparent;
      border-top-color: rgba($color: #fff, $alpha: 0.85);
      transform-origin: center;
      animation-name: jkb-yt-player-loading;
      animation-duration: 1.2s;
      animation-iteration-count: infinite;
    }
    &::after {
      animation-delay: 0.3s;
    }
  }

  &__button--round {
    width: 90px;
    height: 50px;
    border-radius: 9px;

    .jkb-yt-player__play-icon {
      border-top: 4px solid transparent;
      border-left: 8px solid #fff;
      border-bottom: 4px solid transparent;
    }
    .jkb-yt-player__loading {
      width: 20px;
      height: 20px;
    }
    .jkb-yt-player__loading::before,
    .jkb-yt-player__loading::after {
      border-width: 2px;
    }
  }
}

@keyframes jkb-yt-player-loading {
  0% {
    transform: rotate(0);
  }
  0% {
    transform: rotate(-360deg);
  }
}
.jkb-yt-player--small {
  width: 480px;
  height: 320px;
  @include breakpoint('tablet') {
    width: 100%;
    height: 250px;
  }
}
</style>
