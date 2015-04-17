var Sequelize = require('sequelize');
var sequelize = new Sequelize('sequelize', 'root', 'root', {
	host: 'localhost',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

var User = sequelize.define('user', {
	firstName: {
		type: Sequelize.STRING,
		get: function() {
			return this.getDataValue('firstName');
		}
	},
	lastName: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true // Model tableName will be the same as the model name
});

sequelize
	.sync()
	.then(function() {
		console.log('synced');
	});

User.find({
	where: {
		firstName: 'tom'
	}
}).then(function(user) {
	console.log(user.get('firstName'));
});