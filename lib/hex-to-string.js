module.exports = function hexToString( hex ) {
	return "#" + (0xf000000 | hex).toString(16).substr(1)
}