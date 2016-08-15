function _hexToRgb (hex, target) {
  var r = (0xff0000 & hex) >> 16
  var g = (0x00ff00 & hex) >> 8
  var b = (0x0000ff & hex)

  target[0] = r / 255
  target[1] = g / 255
  target[2] = b / 255

  return target
}

export default function routeHexToRgb (hex, target) {
  target = target || []
  return _hexToRgb(hex, target)
}
