export const makeStop = () => {
  const stopSign = { sign: Promise.resolve() }
  const stop = async () => {
    try {
      stopSign.sign = Promise.reject()
      await stopSign.sign
    } catch (e) {
      return
    }
  }
  return {
    stopSign,
    stop,
  }
}

// 給我會回傳 promise 的 function 陣列，會依序執行，執行完Ａ才會執行Ｂ

export const promiseWaterfall = (fnList) => {
  const length = fnList.length
  const fn = async () => {
    try {
      for (let i = 0; i < length; i++) {
        await fnList[i]()
        await stopSign.sign
      }
    } catch (e) {
      return
    }
  }
  const { stop, stopSign } = makeStop(fn)
  return [fn, stop]
}

export const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
export const repeat = (fn, times = Infinity, delay = 1000) => {
  const { stop, stopSign } = makeStop()
  const exec = async () => {
    let executionCount = times + 1
    try {
      while (executionCount > 0) {
        executionCount--
        await fn()
        await stopSign.sign
        if (delay) {
          await sleep(delay)
        }
      }
    } catch (e) {
      return
    }
  }

  return [exec, stop]
}
