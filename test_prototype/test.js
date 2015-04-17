var Animal=function(){
	this.hair='hair';
}

Animal.prototype.say=function(){
	console.log('animal say');
};

var People=function(){};

People.prototype=new Animal();

People.prototype.say=function(){
	console.log('people say');
};

var dog=new Animal();
console.log(dog);
dog.say();


