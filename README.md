# Color

Work with unit interval color arrays valued 0-1 (for instance `[1.0, 0.5, 0.5]` for a desaturated RGB red.) The idea is create small composable functions, which can be combined as needed by the consuming application. Unit interval ranges make it easy to target a wide variety of applications. The functions provide an optional target for the result to in order to limit memory allocation as needed. If no target is provided a new array will be returned.

## API

#### To RGB

	// [ 0, 1, 0.5, 0.3 ] => [ 1, 0, 0, 0.3 ]
	hslToRgb( hsl, optionalTarget )
	hslToRgb( hsla, optionalTarget )
	hslToRgb( h, s, l, optionalTarget )
	hslToRgb( h, s, l, a, optionalTarget )
	
	// 0xff0000 => [1,0,0]
	hexToRgb( hex, optionalTarget )

#### From RGB


	// [ 1, 0, 0, 0.3 ] => [ 0, 1, 0.5, 0.3 ]
	rgbToHsl( rgb, optionalTarget )
	rgbToHsl( rgba, optionalTarget )
	rgbToHsl( r, g, b, optionalTarget )
	rgbToHsl( r, g, b, a, optionalTarget )
	
	// 	[ 1, 0, 0, 0.3 ] => 0xff0000
	rgbToHex( rgb, optionalTarget )
	rgbToHex( r, g, b optionalTarget )

#### To CSS Style

	// [1, 0, 0]      => "rgb(255,0,0)"
	// [1, 0, 0, 0.5] => "rgba(255,0,0,0.5)"
	
	rgbToStyle( rgb )
	rgbToStyle( r, g, b )
	rgbToStyle( rgba )
	rgbToStyle( r, g, b, a )
	
	// [0, 0, 0.5]      => "hsl(0,0,50%)"
	// [0, 0, 0.5, 0.3] => "hsla(0,0,50%,0.3)"
	
	hslToStyle( hsl )
	hslToStyle( h, s, l )
	hslToStyle( hsla )
	hslToStyle( h, s, l, a )

#### Hex

	// "#ff0000" => 0xff0000
	hexToString( hex )
	
	// "#ff0000" => 0xff0000
	stringToHex( string )

## Composition Example

This module doesn't try to figure out every conversion operation, but it is fairly easy to compose them together for custom convertions.

	var {hexToString, rgbToHex, hslToRgb} = require('@tatumcreative/color')
	
	function hslToString( hsl ) {
		return hexToString( rgbToHex( hslToRgb( hsl ) )	)
	}
	
	hslToString( [0.1, 0.5, 0.5] )
