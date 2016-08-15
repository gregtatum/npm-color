import Test from 'tape'
import HexToRgb from '../lib/hex-to-rgb'

Test('hex-to-rgb', function (t) {
  var hexRed = 0xff0000
  var hexCyan = 0x00ffff
  var hexGray = 0x7f7f7f

  var rgbRed = [ 1, 0, 0 ]
  var rgbCyan = [ 0, 1, 1 ]
  var rgbGray = [ 127 / 255, 127 / 255, 127 / 255 ]

  t.test('calculates the rgb array', function (t) {
    t.plan(3)

    t.deepEquals(HexToRgb(hexRed), rgbRed, 'calculates RGB red')
    t.deepEquals(HexToRgb(hexCyan), rgbCyan, 'calculates RGB cyan')
    t.deepEquals(HexToRgb(hexGray), rgbGray, 'calculates RGB gray')
  })

  t.test('uses an optional target', function (t) {
    t.plan(1)

    var target = []

    t.equal(HexToRgb(hexRed, target), target, 'the targets match called with an array')
  })
})
