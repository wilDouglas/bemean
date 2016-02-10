'use strict'
function toUpper(v) {
	return v.toUpperCase();
}
module.exports =  { type: String, set: toUpper };
