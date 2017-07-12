var add = require('./add.js');
var expect = require('chai').expect;

describe('加法测试',function () {
	it('1+1=2',function() {
		expect(add.add(1,1)).to.equal(2);
	});
	it('任何数加0等于自身',function() {
		expect(add.add(1,0)).to.be.equal(1);
		expect(add.add(0,0)).to.be.equal(0);
	});	
	it('filter',function(){
		expect(add.getters('1')).to.include(1);
	})
})