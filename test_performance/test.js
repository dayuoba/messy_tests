'use strict';
function a() {
	for (var i = 0; i < 10000000; i++) {
		if ({}) {
		
		}
	}
}

function b() {
	for (var i = 0; i < 10000000; i++) {
		if (!!{}) {
		
		}
	}
}

function c(cb) {
	var x = !!cb;
	console.log(x);
}
//c(function() {});
//c();
//console.log(!undefined);
//console.log(undefined);
//console.log(!function() {});
//console.log(function() {});
//console.log(!null);
//console.log(null);
//if (function() {}) {
	//console.log('1');
//}
var invokeCallback = function(cb) {
	  if ( !! cb && typeof cb === 'function') {
		      cb.apply(null, Array.prototype.slice.call(arguments, 1));
			    }
};

invokeCallback(x);

function x(a) {
	console.log(a);
}
if (!!undefined) {
	console.log('haha');
}
//console.time('first');
//a();
//console.timeEnd('first');

//console.time('second');
//b();
//console.timeEnd('second');
