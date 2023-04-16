export const minmax = (min, value, max) => {
  if (value <= min) {
    return min
  }
  if (value >= max) {
    return max
  }
  return value
}

export const limitToMin = (value, min) => {
  if (value <= min) {
    return min
  }
  return value
}

export const limitToMax = (value, max) => {
  if (value >= max) {
    return max
  }
  return value
}

export const mapPercentToScale = (val = 0, toScale = 100) => {
  return (val / 100) * toScale
}

export const toFrame = (progress = 0, length = 1000, rate = 24) => {
  const r = Math.floor(mapPercentToScale(progress, rate))
  return { progress: (length / rate) * r, index: r }
}
