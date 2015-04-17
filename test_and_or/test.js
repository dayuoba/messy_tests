//a.x = function() {};
//a.x = {};
//a.x = [];
//a.x = 3;
//a.x = '';  no out put
//a.x=' ';
//a.x=false; no out put
//a.x = true;
// a.x = 0; no out put
//a.x = -1;
var a = {};
a.x = -10;
if (a.x) {
	console.log('general');
}
if (!!a.x) {
	console.log('!!');
}