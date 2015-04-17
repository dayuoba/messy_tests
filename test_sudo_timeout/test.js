var spawn = require('child_process').spawn;
var time = 0;
var interval = setInterval(function() {
	time++;
	console.log(time + 's');
}, 1000);


setTimeout(function() {
	var chromium = spawn('sudo', ['nano', 'app.js']);

	chromium.stdout.on('data', function(data) {
		console.log(data.toString());
	});
	clearInterval(interval);
}, 1000 * 60 * 7);