/*
	Allow color calls to be called two different ways:

	fn( a, b, c, optionalTarget )
	fn( color, optionalTarget )
*/

export default function routeCalls4dFn( fn ) {

	return function routeCalls4d( a, b, c, d, e ) {

		// fn( color, optionalTarget )
		if(Array.isArray(a)) {

			var color = a
			var target = Array.isArray(b) ? b : []

			return fn( color[0], color[1], color[2], color[3], target )

		} else {

			// fn( a, b, c, optionalTarget )
			if( Array.isArray(d) ) {
				return fn( a, b, c, undefined, d )
			} else {

				// fn( a, b, c, optionalTarget )
				// fn( a, b, c, d, optionalTarget )
				var target = Array.isArray(e) ? e : []
				return fn( a, b, c, d, target )

			}
		}
	}
}
