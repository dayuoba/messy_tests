var fs = require("fs");
var stream = require("stream");

var transform = new stream.Transform({
	//highWaterMark: 1024 * 1024
});

transform._transform = function(chunk, encoding, callback) {
	console.log("Got chunk, length", chunk.length);
	this.push(chunk);
	return callback();
};

// transform.on('data', function(chunk) {
// 	console.log('go data');
// });

transform.on('end', function(chunk) {
	console.log('end');
});

console.log("Starting stream...");

function keepLooping() {
	setTimeout(function() {
		console.log('keep looping');
		//console.log(transform);
		process.nextTick(keepLooping);
	}, 1000);
}

keepLooping();
fs.createReadStream("./lower.txt")
	.pipe(transform)
	.on("end", function() {
		console.log("Done!");
	});

process.on('exit', function(code) {
	console.log(code);
});