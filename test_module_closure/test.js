var test1 = require('./m1');

var test2 = require('./m1');

console.log(test1.a); //1
console.log(test2.a); //1

var test3 = require('./m2');
var test4 = require('./m2');

console.log(test3.a); //1
console.log(test4.a); //1

var test5 = require('./m3');
var test6 = require('./m3');

console.log(test5());//2
console.log(test6());//3