var spawn=require('child_process').spawn;

var cp=spawn('node',['cp.js']);
cp.stdout.on('data',function(data){
	console.log(data.toString());
});
cp.stderr.on('data',function(err){
	console.log(err.toString());
});
cp.stdin.write('hi i am father process');
cp.on('error',function(err){
	console.log(err);
});
cp.on('message',function(){
	console.log('message');
});
cp.on('exit',function(code){
	console.log(code);
});
