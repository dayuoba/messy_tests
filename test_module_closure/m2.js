var x = 1;

var m = function() {
	this.a = x;
	x++;
}

module.exports = new m();