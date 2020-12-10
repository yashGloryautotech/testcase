const assert  = require('chai').assert;
const app=require('../index')

describe('index',function(){
    it('add number should be 2', function(){
        let result=app.addNumbers(5,5)
        assert.equal(result,2)
    }); 
     
    it('hello is typeof string',function(){
        assert.typeOf(app.sayHello(),'string')
    });
    
    it('return Hello',function(){
        assert.equal(app.sayHello(),'Hello')
    });
    
    it('add number should return number',function(){
        assert.typeOf(app.addNumbers(),'number')
    }); 
});
