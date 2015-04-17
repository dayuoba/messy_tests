var x=2;


function test_variable(x){
	console.log(x);
}

test_variable(3);//3


test_variable();//undifined

function another(x){
	x=3;
	console.log(x);
}

function another2(){
	console.log(x);
}

another();//3
another2();//2
