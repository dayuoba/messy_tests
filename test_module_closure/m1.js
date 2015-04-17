var x = 1;
var m1 = module.exports = (function() {
	function m() {
		this.a = x;
		x++;
	}
	return new m();
}());