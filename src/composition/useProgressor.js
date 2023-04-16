import { computed, ref } from 'vue'
import { limitToMax, limitToMin, toFrame, minmax } from '@/utils/math.js'

export const useProgressor = () => {
  const progress = ref(0)

  const runner = {
    runningProgress: null,
    pauseHandle: Promise.resolve(),
    cancelHandle: Promise.resolve(),
    state: 'stop',
    continue: () => {},
    pause() {
      if (this.state === 'pause' || this.state === 'stop') {
        return
      }
      this.state = 'pause'
      this.pauseHandle = new Promise((resolve) => {
        this.continue = () => {
          resolve('pause')
          this.pauseHandle = Promise.resolve()
          this.continue = () => {}
          this.state = 'running'
        }
      })
    },
    async cancel() {
      if (this.state === 'stop') {
        return
      }
      try {
        await (this.cancelHandle = Promise.reject())
      } catch (e) {
        this.continue()
        await this.runningProgress
        this.continue = () => {}
        this.cancelHandle = Promise.resolve()
      }
    },
    async run(duration = 1000, direction = 1) {
      await this.cancel()

      this.runningProgress = new Promise((resolve) => {
        this.state = 'running'
        let previousTimeStamp
        const step = 100 / duration

        const exec = async (timestamp) => {
          try {
            const type = await this.pauseHandle
            await this.cancelHandle
            if (type === 'pause') {
              previousTimeStamp = undefined
              window.requestAnimationFrame(exec)
              return
            }
          } catch (e) {
            resolve()
            return
          }

          if (!previousTimeStamp) {
            previousTimeStamp = timestamp
          }

          const length = timestamp - previousTimeStamp
          previousTimeStamp = timestamp

          if (direction === 1) {
            progress.value = limitToMax(progress.value + length * step, 100)

            if (progress.value < 100) {
              window.requestAnimationFrame(exec)
            } else {
              resolve()
            }
          } else if (direction === 0) {
            progress.value = limitToMin(progress.value - length * step, 0)

            if (progress.value > 0) {
              window.requestAnimationFrame(exec)
            } else {
              resolve()
            }
          }
        }
        window.requestAnimationFrame(exec)
      }).then(() => {
        this.state = 'stop'
      })
      return this.runningProgress
    },
  }

  return {
    progress,
    runner,
  }
}

export const useFrame = (progressRef, lengthRef, rate = 24) => {
  return {
    frame: computed(() => toFrame(progressRef.value, lengthRef.value, rate)),
  }
}

// track sample
// const settings = {
//   A: {
//     start: 0,
//     end: 100 / 3,
//   },
//   B: {
//     start: 100 / 3,
//     end: (100 / 3) * 2,
//   },
// }
export const track = (progress = 0, trackSettings) => {
  const result = {}
  Object.entries(trackSettings).forEach(([name, setting]) => {
    let range = setting.end - setting.start
    let p = progress - setting.start

    result[name] = minmax(0, (p / range) * 100, 100)
  })
  return result
}

export const useTrack = (progressRef, trackSettings) => {
  return {
    track: track(progressRef.value, trackSettings),
  }
}
