var someclass = require('./module');
var someinstance = new someclass('lily');

console.time();
console.log(someclass.__private()[10000]);
console.timeEnd();


function x(){
	var a=2;
}