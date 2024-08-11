const sumOfTwoNumbers = require('..tests.js'); 
const { assert } = require('chai');

describe('sumOfTwoNumbers function test', ()=>{

    it('test with two numbers', ()=>{
        assert.equal(sumOfTwoNumbers(3,4), 7);
    });
});