//setInterval(function(){
//	process.stdout.write('hello');
//},1000);

process.stdin.on('data',function(data){
	process.stdout.write(data.toString()+'cp got');
});

setTimeout(function(){
	process.exit();
},2000);
