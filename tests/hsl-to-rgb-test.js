import Test from 'tape'
import HslToRgb from '../lib/hsl-to-rgb'
import Fuzz from 'test-fuzzy-array'

Test('hsl-to-rgb', function (t) {
  var hslRed = [0, 1, 0.5]
  var hslCyan = [0.5, 1, 0.5]
  var hslGray = [0, 0, 0.5]

  var hslaRed = [0, 1, 0.5, 0.3]
  var rgbaRed = [1, 0, 0, 0.3]

  t.test('calculates on an array', function (t) {
    var almostEqual = Fuzz(t, 0.000001)
    t.plan(3)

    almostEqual(HslToRgb(hslRed), [ 1, 0, 0 ], 'calculates RGB red')
    almostEqual(HslToRgb(hslCyan), [ 0, 1, 1 ], 'calculates RGB cyan')
    almostEqual(HslToRgb(hslGray), [ 0.5, 0.5, 0.5 ], 'calculates RGB gray')
  })

  t.test('calculates on bare parameters', function (t) {
    var almostEqual = Fuzz(t, 0.000001)
    t.plan(3)

    almostEqual(HslToRgb(0, 1, 0.5), [ 1, 0, 0 ], 'calculates RGB red')
    almostEqual(HslToRgb(0.5, 1, 0.5), [ 0, 1, 1 ], 'calculates RGB cyan')
    almostEqual(HslToRgb(0, 0, 0.5), [ 0.5, 0.5, 0.5 ], 'calculates RGB gray')
  })

  t.test('preserves alpha', function (t) {
    var almostEqual = Fuzz(t, 0.000001)
    t.plan(2)

    almostEqual(HslToRgb(hslaRed), rgbaRed, 'when called as an array')
    almostEqual(HslToRgb(0, 1, 0.5, 0.3), rgbaRed, 'when called by parameters')
  })

  t.test('uses an optional target', function (t) {
    var target = []
    t.plan(2)

    t.equal(HslToRgb(hslRed, target), target, 'the targets match called with an array')
    t.equal(HslToRgb(0, 1, 0.5, target), target, 'the targets match called with parameters')
  })
})
