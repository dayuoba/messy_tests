//private
//console.log(require.main);
//Constructoer
var Class = module.exports = function(smArgs) {
	this.smArgs = smArgs;
	console.log('constructor running');
	//private
	Class.private = function() {
		this.x = 1;
		this.y = 1;
		for (var i = 0; i < 10000000; i++) {
			this[i] = i;
		}
	};
	Class.__private = function() {
		return Class.private;
	};
};
//Class methods
Class.add = function() {
	console.log('i am class function');
};

Class.getX = function() {
	return x;
};
//instance methods;
Class.prototype.add = function() {
	console.log('i am instance function');
};