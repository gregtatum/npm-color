/*
	Allow color calls to be called two different ways:

	fn( a, b, c, optionalTarget )
	fn( color, optionalTarget )
*/

export default function routeCalls3dFn (fn) {
  return function routeCalls3d (a, b, c, d) {
    var target
    // fn( color, optionalTarget )
    if (Array.isArray(a)) {
      var color = a
      target = Array.isArray(b) ? b : []

      return fn(color[0], color[1], color[2], target)

    // fn( a, b, c, optionalTarget )
    } else {
      target = Array.isArray(d) ? d : []
      return fn(a, b, c, target)
    }
  }
}
