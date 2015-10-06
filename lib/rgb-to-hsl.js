var Route = require('./utils/route-calls-4d')

function _rgbToHsl( r, g, b, a, result ) {

	var max = Math.max(r, g, b), min = Math.min(r, g, b)
	var h, s, l = (max + min) / 2

	// achromatic
	if( max === min ){
		
		h = s = 0 
		
	} else {
		
		var d = max - min
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
		
		switch(max){
			case r: h = (g - b) / d + (g < b ? 6 : 0); break
			case g: h = (b - r) / d + 2; break
			case b: h = (r - g) / d + 4; break
		}
		
		h /= 6
	}
	
	result[0] = h
	result[1] = s
	result[2] = l
	
	if( a >= 0 ) {
		result[3] = a
	}
	
	return result
}

module.exports = Route( _rgbToHsl )