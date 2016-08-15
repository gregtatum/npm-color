import Test from 'tape'
import RgbToHex from '../lib/rgb-to-hex'

Test('rgb-to-hex', function (t) {
  var hexRed = 0xff0000
  var hexCyan = 0x00ffff
  var hexGray = 0x7f7f7f

  var rgbRed = [ 1, 0, 0 ]
  var rgbCyan = [ 0, 1, 1 ]
  var rgbGray = [ 127 / 255, 127 / 255, 127 / 255 ]

  t.test('calculates the rgb array', function (t) {
    t.plan(3)

    t.deepEquals(RgbToHex(rgbRed), hexRed, 'calculates hex red')
    t.deepEquals(RgbToHex(rgbCyan), hexCyan, 'calculates hex cyan')
    t.deepEquals(RgbToHex(rgbGray), hexGray, 'calculates hex gray')
  })
})
