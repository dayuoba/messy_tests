function daemon(){
	var new_app=require('child_process').spawn('node',['./app.js']);
	new_app.on('exit',function(code){
		daemon();
	});
	new_app.stdout.on('data',function(data){
		console.log(data.toString());
	});
}

daemon();

