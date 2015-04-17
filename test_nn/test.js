var B = function(foo) {
	if (foo) return console.log('ok');
	console.log('not ok');
};

var types = [
	'', !!'',
	' ', !!' ', [], !![], {}, !!{},
	function() {}, !! function() {},
	0, !!0,
	1, !!1, -1, !!-1,
	true, !!true,
	false, !!false,
	undefined, !!undefined,
	null, !!null,
	NaN, !!NaN
];

types.forEach(function(type) {
	B(type);
});