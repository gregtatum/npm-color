import HslToRgb from './hsl-to-rgb'
import RgbToHex from './rgb-to-hex'
var Scratch = []

function _hslToHex (h, s, l, a) {
  return RgbToHex(HslToRgb(h, s, l, a, Scratch))
}

export default function routeCalls (a, b, c) {
  if (Array.isArray(a)) {
    var color = a
    return _hslToHex(color[0], color[1], color[2])
  } else {
    return _hslToHex(a, b, c)
  }
}
