import Test from 'tape'
import RgbToHsl from '../lib/rgb-to-hsl'
import Fuzz from 'test-fuzzy-array'

Test("rgb-to-hsl", function(t) {

	var rgbRed =  [1,0,0]
	var rgbCyan = [0,1,1]
	var rgbGray = [0.5,0.5,0.5]

	var hslRed =  [0,1,0.5]
	var hslCyan = [0.5,1,0.5]
	var hslGray = [0,0,0.5]

	var rgbaRed =  [1,0,0,0.3]
	var hslaRed =  [0,1,0.5,0.3]

	t.test("calculates on an array", function(t) {

		var almostEqual = Fuzz(t, 0.000001)
		t.plan(3)

		almostEqual( RgbToHsl( rgbRed ),  hslRed, "calculates HSL red")
		almostEqual( RgbToHsl( rgbCyan ), hslCyan, "calculates HSL cyan")
		almostEqual( RgbToHsl( rgbGray ), hslGray, "calculates HSL gray")
	})

	t.test("calculates on bare parameters", function(t) {

		var almostEqual = Fuzz(t, 0.000001)
		t.plan(3)

		almostEqual( RgbToHsl(1,0,0      ), hslRed, "calculates HSL red")
		almostEqual( RgbToHsl(0,1,1      ), hslCyan, "calculates HSL cyan")
		almostEqual( RgbToHsl(0.5,0.5,0.5), hslGray, "calculates HSL gray")
	})

	t.test("preserves alpha", function(t) {

		var almostEqual = Fuzz(t, 0.000001)
		t.plan(2)

		almostEqual( RgbToHsl( rgbaRed ), hslaRed, "when called as an array")
		almostEqual( RgbToHsl( 1,0,0,0.3 ), hslaRed, "when called by parameters")
	})

	t.test("uses an optional target", function(t) {

		var target = []
		t.plan(2)

		t.equal( RgbToHsl( rgbRed,    target ), target, "the targets match called with an array")
		t.equal( RgbToHsl( 0, 1, 0.5, target ), target, "the targets match called with parameters")
	})
})
