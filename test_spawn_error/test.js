var spawn = require('child_process').spawn;

var ps = spawn('ps',['dasdc']);

ps.stdout.on('data', function(data) {
	console.log(data.toString());
});
ps.stderr.on('data', function(err) {
	console.log('stderr: ' + err);
})
ps.on('error', function(err) {
	console.log('child_process_err: ' + err);
});

console.log('next things');
console.log(process.cwd());