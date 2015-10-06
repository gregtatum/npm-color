function _rgbFillStyle( r, g, b ) {
	
	r = parseInt( r * 255, 10 )
	g = parseInt( g * 255, 10 )
	b = parseInt( b * 255, 10 )
	
	return ["rgb(",r,",",g,",",b,")"].join('')
}

function _rgbaFillStyle( r, g, b, a ) {
	
	r = parseInt( r * 255, 10 )
	g = parseInt( g * 255, 10 )
	b = parseInt( b * 255, 10 )
	
	//Round to 0.000
	a = parseInt( a * 1000, 10 ) / 1000
	
	return ["rgba(",r,",",g,",",b,",",a,")"].join('')
}

module.exports = function ( a, b, c, d ) {
	
	if(Array.isArray(a)) {
		var array = a
		a = array[0]
		b = array[1]
		c = array[2]
		d = array[3]
	}
	
	if( typeof d === "undefined" ) {
		return _rgbFillStyle( a, b, c )
	} else {
		return _rgbaFillStyle( a, b, c, d )
	}
}