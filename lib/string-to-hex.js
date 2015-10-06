module.exports = function stringToHex( string ) {
	return parseInt(string.substr(1), 16)
}