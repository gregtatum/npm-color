function _rgbFillStyle (h, s, l) {
  h = parseInt(h * 360, 10)
  s = parseInt(s * 100, 10)
  l = parseInt(l * 100, 10)

  return ['hsl(', h, ',', s, '%,', l, '%)'].join('')
}

function _rgbaFillStyle (h, s, l, a) {
  h = parseInt(h * 360, 10)
  s = parseInt(s * 100, 10)
  l = parseInt(l * 100, 10)

  // Round to 0.000
  a = parseInt(a * 1000, 10) / 1000

  return ['hsla(', h, ',', s, '%,', l, '%,', a, ')'].join('')
}

export default function (a, b, c, d) {
  if (Array.isArray(a)) {
    var array = a
    a = array[0]
    b = array[1]
    c = array[2]
    d = array[3]
  }

  if (typeof d === 'undefined') {
    return _rgbFillStyle(a, b, c)
  } else {
    return _rgbaFillStyle(a, b, c, d)
  }
}
