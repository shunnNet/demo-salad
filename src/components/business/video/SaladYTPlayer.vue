<template>
  <div class="salad-yt-player" :class="playerThemeClass">
    <YTPlayer
      class="salad-yt-player__player"
      :video-id="videoId"
      :options="playerOptions"
      @ready="handleReady"
      @state-change="handleStateChange"
    />
    <div
      v-if="sleeping"
      class="salad-yt-player__overlay"
      :style="{ ...buttonPlacement }"
      @click="handlePlay"
    >
      <div class="salad-yt-player__cover">
        <slot name="preview">
          <div
            class="salad-yt-player__cover-bg"
            :style="{
              backgroundImage: `url(${previewImage})`,
            }"
          ></div>
        </slot>
      </div>

      <SaladPlayerPlayButton
        class="salad-yt-player__button"
        :theme="buttonTheme"
        :loading="loading"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import YTPlayer from '@/components/common/video/YTPlayer.vue'
import SaladPlayerPlayButton from '@/components/business/video/SaladPlayerPlayButton.vue'

export default {
  name: 'SaladYTPlayer',
  components: {
    YTPlayer,
    SaladPlayerPlayButton,
  },
  props: {
    videoId: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default() {
        return {}
      },
    },
    playerTheme: {
      type: String,
      default: '',
      validator: (val) => ['', 'small'].includes(val),
    },
    placement: {
      type: Array,
      default: () => ['center', 'center'],
    },
    buttonTheme: {
      type: String,
      default: 'circle',
      validator: (val) => ['circle', 'round'].includes(val),
    },
    // available value: https://stackoverflow.com/a/20542029/10536311
    // 圖片不是每個尺寸都有，請嘗試
    thumbnail: {
      type: String,
      default: '0',
    },
  },
  setup(props) {
    const sleeping = ref(true)
    const loading = ref(false)
    const previewImage = computed(() => {
      return `https://i.ytimg.com/vi/${props.videoId}/${props.thumbnail}.jpg`
    })

    const playerOptions = computed(() => {
      return {
        controls: 0,
        autoplay: 0,
        loop: 0,
        hl: 'zh-TW',
        rel: 0,
        fs: 0,
        modestbranding: 1,
        ...props.options,
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
        'align-items': resolved[1],
      }
    })

    const buttonThemeClass = computed(() => {
      return {
        [`salad-yt-player__button--${props.buttonTheme}`]: true,
        'salad-yt-player__button--loading': loading.value,
      }
    })

    const playerThemeClass = computed(() => {
      return props.playerTheme ? `salad-yt-player--${props.playerTheme}` : ''
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
      playerThemeClass,
    }
  },
}
</script>

<style lang="scss">
.salad-yt-player {
  position: relative;
  width: 958px;
  height: 540px;
  background-color: #000;
  &__player {
    width: 100% !important;
    height: 100% !important;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      .play-button {
        background-color: rgba(115, 133, 159, 0.5);
        transition: all 0s;
      }
    }
  }

  &__cover {
    position: absolute;
    inset: 0;
    z-index: 1;
  }
  &__cover-bg {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &__button {
    position: absolute;
    z-index: 2;
  }
}
</style>
