function _rgbToHex (r, g, b) {
  var r255 = parseInt(r * 255, 10)
  var g255 = parseInt(g * 255, 10)
  var b255 = parseInt(b * 255, 10)

  return (r255 << 16) | (g255 << 8) | b255
}

export default function routeRgbToHex (a, b, c) {
  // _rgbToHex( color )
  if (Array.isArray(a)) {
    return _rgbToHex(a[0], a[1], a[2])

  // _rgbToHex( a, b, c, optionalTarget )
  } else {
    return _rgbToHex(a, b, c)
  }
}
