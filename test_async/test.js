var app = require('./lib/application');

//example for event drive
app.startNetServer();

app.on('netServerStarted', function listener(data) {
	//do your next step
});

app.on('netServerError', function errHandle(err) {
	//log it 
});


//example for callback drive
app.startNetServer(function callback(err, data) {
	//handle exception
	//do your next
});

//the difference in implemention


//application.js
var application = {};

//event drive
application.startNetServer = function() {
	//init server
	//return error ? this.emit('netServerError',err) : this.emit('netServerStarted', data);
};

//callback drive
application.startNetServer = function(cb) {
	//init server
	//return error ? cb(err) : cb(null, data);
};