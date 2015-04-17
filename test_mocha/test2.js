var should = require('should');

describe('test', function() {
	it('throw', function() {
		function isPositive(n) { 
			if(n <= 0) throw new Error('Given number is not positive')
		}
		  
		isPositive.bind(null, 10).should.not.throw();
		isPositive.bind(null, -10).should.throw();
	});
});
