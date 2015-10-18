var Test = require('tape')
var HslToHex = require('../lib/hsl-to-hex')
var Fuzz = require('test-fuzzy-array')

Test("hsl-to-hex", function(t) {

	var hslRed =  [0,   1, 0.5]
	var hslCyan = [0.5, 1, 0.5]
	var hslGray = [0,   0, 0.5]

	t.test("calculates on an array", function(t) {
		
		t.plan(3)
		
		t.equal( HslToHex( hslRed ),  0xff0000, "calculates RGB red")
		t.equal( HslToHex( hslCyan ), 0x00feff, "calculates RGB cyan")
		t.equal( HslToHex( hslGray ), 0x7f7f7f, "calculates RGB gray")
	})
	
	t.test("calculates on bare parameters", function(t) {
		
		t.plan(3)
		
		t.equal( HslToHex( 0, 1, 0.5   ), 0xff0000, "calculates RGB red")
		t.equal( HslToHex( 0.5, 1, 0.5 ), 0x00feff, "calculates RGB cyan")
		t.equal( HslToHex( 0, 0, 0.5   ), 0x7f7f7f, "calculates RGB gray")
	})
})