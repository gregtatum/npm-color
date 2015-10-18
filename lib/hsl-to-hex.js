var Route = require('./utils/route-calls-4d')
var HslToRgb = require('./hsl-to-rgb')
var RgbToHex = require('./rgb-to-hex')
var Scratch = []

function _hslToHex( h, s, l, a ){
	
	return RgbToHex( HslToRgb( h, s, l, a, Scratch ) )
	
}

module.exports = function routeCalls( a, b, c ) {

	if(Array.isArray(a)) {
	
		var color = a
		return _hslToHex( color[0], color[1], color[2] )
	
	} else {
		return _hslToHex( a, b, c )
	}
}