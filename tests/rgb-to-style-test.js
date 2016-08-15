import Test from 'tape'
import RgbToStyle from '../lib/rgb-to-style'

Test('rgb-to-string', function (t) {
  var rgbRed = [ 1, 0, 0 ]
  var rgbCyan = [ 0, 1, 1 ]
  var rgbGray = [ 127 / 255, 127 / 255, 127 / 255 ]

  var rgbaRed = [ 1, 0, 0, 0.5 ]
  var rgbaCyan = [ 0, 1, 1, 0.5 ]
  var rgbaGray = [ 127 / 255, 127 / 255, 127 / 255, 0.5 ]

  t.test('calculates the rgb style string for an array', function (t) {
    t.plan(3)

    t.equals(RgbToStyle(rgbRed), 'rgb(255,0,0)', 'calculates red')
    t.equals(RgbToStyle(rgbCyan), 'rgb(0,255,255)', 'calculates cyan')
    t.equals(RgbToStyle(rgbGray), 'rgb(127,127,127)', 'calculates gray')
  })

  t.test('calculates the rgb style string for bare parameters', function (t) {
    t.plan(3)

    t.equals(RgbToStyle(rgbRed[0], rgbRed[1], rgbRed[2]), 'rgb(255,0,0)', 'calculates red')
    t.equals(RgbToStyle(rgbCyan[0], rgbCyan[1], rgbCyan[2]), 'rgb(0,255,255)', 'calculates cyan')
    t.equals(RgbToStyle(rgbGray[0], rgbGray[1], rgbGray[2]), 'rgb(127,127,127)', 'calculates gray')
  })

  t.test('calculates the rgba style string for an array', function (t) {
    t.plan(3)

    t.equals(RgbToStyle(rgbaRed), 'rgba(255,0,0,0.5)', 'calculates red')
    t.equals(RgbToStyle(rgbaCyan), 'rgba(0,255,255,0.5)', 'calculates cyan')
    t.equals(RgbToStyle(rgbaGray), 'rgba(127,127,127,0.5)', 'calculates gray')
  })

  t.test('calculates the rgba style string for bare parameters', function (t) {
    t.plan(3)

    t.equals(RgbToStyle(rgbaRed[0], rgbaRed[1], rgbaRed[2], rgbaRed[3]), 'rgba(255,0,0,0.5)', 'calculates red')
    t.equals(RgbToStyle(rgbaCyan[0], rgbaCyan[1], rgbaCyan[2], rgbaCyan[3]), 'rgba(0,255,255,0.5)', 'calculates cyan')
    t.equals(RgbToStyle(rgbaGray[0], rgbaGray[1], rgbaGray[2], rgbaGray[3]), 'rgba(127,127,127,0.5)', 'calculates gray')
  })
})
