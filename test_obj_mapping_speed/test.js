var app = {};
for (var i = 0; i < 1000000; i++) {
	app[i] = {
		x: function() {},
		y: {}
	};
}
console.time('select time');
console.log(app[999999].x);
console.log(app[999999].y);
console.timeEnd('select time');
var app2 = {};
app2[1] = {
	x: {},
	y: function() {}
};
console.time('select time2');
console.log(app2[1].y);
console.log(app2[1].x);
console.timeEnd('select time2');
//how do you think about 1ms and 0ms