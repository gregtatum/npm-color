import Route from './utils/route-calls-4d'

function _hueToRgb(p, q, t) {

    if( t < 0 ) t += 1
    if( t > 1 ) t -= 1
    if( t < 1/6 ) return p + (q - p) * 6 * t
    if( t < 1/2 ) return q
    if( t < 2/3 ) return p + (q - p) * (2/3 - t) * 6
    return p
}

function _hslToRgb( h, s, l, a, results ){

    var r, g, b

	// achromatic
    if( s == 0 ){

        r = g = b = l

    } else {

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s
        var p = 2 * l - q
        r = _hueToRgb(p, q, h + 1/3)
        g = _hueToRgb(p, q, h)
        b = _hueToRgb(p, q, h - 1/3)
    }

	results[0] = r
	results[1] = g
	results[2] = b

	if( a >= 0 ) {
		results[3] = a
	}

    return results
}

export default Route( _hslToRgb )
