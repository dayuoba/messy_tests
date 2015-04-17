function a() {
  this.x=2;
}

a.prototype={};
a.prototype.x=3;

var c = new a();

console.log(c);
console.log(c.__proto__);
console.log(a.prototype);

