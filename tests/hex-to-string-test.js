import Test from 'tape'
import HexToString from '../lib/hex-to-string'

Test('hex-to-string', function (t) {
  var hexRed = 0xff0000
  var hexCyan = 0x00ffff
  var hexGray = 0x7f7f7f

  var stringRed = '#ff0000'
  var stringCyan = '#00ffff'
  var stringGray = '#7f7f7f'

  t.test('calculates the hex string', function (t) {
    t.plan(3)

    t.deepEquals(HexToString(hexRed), stringRed, 'calculates string red')
    t.deepEquals(HexToString(hexCyan), stringCyan, 'calculates string cyan')
    t.deepEquals(HexToString(hexGray), stringGray, 'calculates string gray')
  })
})
