var Test = require('tape')
var RgbToStyle = require('../lib/hsl-to-style')
var Fuzz = require('test-fuzzy-array')

Test("hsl-to-string", function(t) {

	var hslRed =  [0,   1, 0.5]
	var hslCyan = [0.5, 1, 0.5]
	var hslGray = [0,   0, 0.5]

	var hslaRed =  [0,   1, 0.5, 0.3333333]
	var hslaCyan = [0.5, 1, 0.5, 0.3]
	var hslaGray = [0,   0, 0.5, 0.3]
		
	t.test("calculates the hsl style string for an array", function(t) {
		
		t.plan(3)
		
		t.equals( RgbToStyle( hslRed ),  "hsl(0,100%,50%)",   "calculates red")
		t.equals( RgbToStyle( hslCyan ), "hsl(180,100%,50%)", "calculates cyan")
		t.equals( RgbToStyle( hslGray ), "hsl(0,0%,50%)",      "calculates gray")
	})

	t.test("calculates the hsl style string for bare parameters", function(t) {
		
		t.plan(3)
		
		t.equals( RgbToStyle( hslRed[0], hslRed[1], hslRed[2] ),  "hsl(0,100%,50%)",     "calculates red")
		t.equals( RgbToStyle( hslCyan[0], hslCyan[1], hslCyan[2] ), "hsl(180,100%,50%)", "calculates cyan")
		t.equals( RgbToStyle( hslGray[0], hslGray[1], hslGray[2] ), "hsl(0,0%,50%)",      "calculates gray")
	})
	
	t.test("calculates the hsla style string for an array", function(t) {
		
		t.plan(3)
		
		t.equals( RgbToStyle( hslaRed ),  "hsla(0,100%,50%,0.333)",   "calculates red")
		t.equals( RgbToStyle( hslaCyan ), "hsla(180,100%,50%,0.3)", "calculates cyan")
		t.equals( RgbToStyle( hslaGray ), "hsla(0,0%,50%,0.3)",      "calculates gray")
	})
	
	t.test("calculates the hsla style string for bare parameters", function(t) {
		
		t.plan(3)
		
		t.equals( RgbToStyle( hslaRed[0], hslaRed[1], hslaRed[2], hslaRed[3] ),  "hsla(0,100%,50%,0.333)",   "calculates red")
		t.equals( RgbToStyle( hslaCyan[0], hslaCyan[1], hslaCyan[2], hslaCyan[3] ), "hsla(180,100%,50%,0.3)", "calculates cyan")
		t.equals( RgbToStyle( hslaGray[0], hslaGray[1], hslaGray[2], hslaGray[3] ), "hsla(0,0%,50%,0.3)",      "calculates gray")
	})
})