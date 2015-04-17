var util = require('util');
var EventEmitter = require('events').EventEmitter;

var User = function() {
  //EventEmitter.call(this);
  this.name = arguments[0];
  this.sex = arguments[1];
};
util.inherits(User, EventEmitter);
//User.prototype = EventEmitter.prototype;
User.prototype.say = function() {
  console.log(this.name);
};
//util.inherits(User, EventEmitter);//if put codes here,User.prototype will be overwritten

var tom = new User('tom', 'boy');

tom.say();

tom.on('say', function() {
  console.log('saying');
});

tom.emit('say', {});
