var rl=require('readline');

var rli=rl.createInterface({
	input:process.stdin,
	output:process.stdout
});


rli.question('please type your name:\n',function(line){
	console.log(line);
	rli.question('please type your age:\n',function(line){
		console.log(line);
	});
});

