var Test = require('tape')
var StringToHex = require('../lib/string-to-hex')

Test("hex-to-string", function(t) {

	var hexRed =  0xff0000
	var hexCyan = 0x00ffff
	var hexGray = 0x7f7f7f
	
	var stringRed =  "#ff0000"
	var stringCyan = "#00ffff"
	var stringGray = "#7f7f7f"
	
	t.test("calculates the hex string", function(t) {
		
		t.plan(3)
		
		t.deepEquals( StringToHex( stringRed ),  hexRed,  "calculates hex red")
		t.deepEquals( StringToHex( stringCyan ), hexCyan, "calculates hex cyan")
		t.deepEquals( StringToHex( stringGray ), hexGray, "calculates hex gray")
	})
})