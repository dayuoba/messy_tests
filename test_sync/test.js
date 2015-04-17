var exec = require('child_process').exec;
var a = [];
exec('php test.php', function(err, stdout, stderr) {
	if (stdout) {
		a.push(stdout.toString())
	}
	console.log('callback');
	console.log(a.length);
});

console.log('not callback');
console.log(a.length);