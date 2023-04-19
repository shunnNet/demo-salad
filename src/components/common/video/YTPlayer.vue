<script>
import { loadYTIframeApi } from '@/store/third-party.js'
import { onMounted, ref, watch } from 'vue'
export default {
  emits: [
    'ready',
    'state-change',
    'quality-change',
    'rate-change',
    'error',
    'api-change',
  ],
  props: {
    videoId: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const player = ref(null)
    const playerRef = ref(null)

    const loadPlayer = async () => {
      const YT = await loadYTIframeApi()

      if (!playerRef.value) {
        return null
      } else {
        player.value = new YT.Player(playerRef.value, {
          videoId: props.videoId,
          playerVars: {
            origin: window.location.origin,
            ...props.options,
          },

          events: {
            onReady: (event) => emit('ready', event),
            onStateChange: (event) => emit('state-change', event),
            onPlaybackQualityChange: (event) => emit('quality-change', event),
            onPlaybackRateChange: (event) => emit('rate-change', event),
            onError: (event) => emit('error', event),
            onApiChange: (event) => emit('api-change', event),
          },
        })
        return player.value
      }
    }
    onMounted(() => {
      loadPlayer()
    })

    watch(
      () => props.videoId,
      () => loadPlayer()
    )

    return {
      playerRef,
      player,
    }
  },
}
</script>
<template>
  <div class="yt-player">
    <div id="player" ref="playerRef"></div>
  </div>
</template>
<style lang="scss">
.yt-player {
  width: 640px;
  height: 390px;
  #player {
    width: 100%;
    height: 100%;
  }
}
</style>
