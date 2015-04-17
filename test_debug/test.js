var fun = function(){}

fun.prototype = {    
	    name : 'peter',    
		    age : 25    
}

var a = new fun();
var b = new fun();

a.name = 'jack';
b.name = 'tom';
console.log(a.name);
console.log(b.name);
