const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {

  describe('getBiggest', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.getBiggest, 'function');
    });
    it('should take two numbers and produce the bigger of the two: x is less than y produces y', () => {
      assert.equal(funcs.getBiggest(1,2), 2);
    });
    it ('should take two numbers and produce the bigger of the two: x is equal to y produces y', () => {
      assert.equal(funcs.getBiggest(2,2), 2);
    });
    it ('should take two numbers and produce the bigger of the two: x is greater than y produces x', () => {
      assert.equal(funcs.getBiggest(3,2), 3);
    });
  });
  describe('greeting', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.greeting, 'function');
    });
    it('should take a language and produce a hello greeting, with English as the default: German first', () => {
      assert.equal(funcs.greeting('German'), 'Guten Tag!');
      assert.equal(funcs.greeting('Spanish'), 'Hola!');
      assert.equal(funcs.greeting('English'), 'Hello!');
      assert.equal(funcs.greeting('Italian'), 'Hello!');
    })
  });
  describe('isTenOrFive', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isTenOrFive, 'function');
    });
    it('should take one number and return true for either ten or five: ten is true', () => {
      assert.isTrue(funcs.isTenOrFive(10));
    });
    it('should take one number and return true for either ten or five: five is true', () => {
      assert.isTrue(funcs.isTenOrFive(5));
    });
    it('should take one number and return true for either ten or five, false otherwise', () => {
      assert.isFalse(funcs.isTenOrFive(9));
    });
  });
  describe('isInRange', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isInRange, 'function');
    });
    it('should take one number that returns true if the number is greater than 20 and less than 50: 30 is true', () => {
      assert.isTrue(funcs.isInRange(30));
    });
    it('should take one number that returns true if the number is greater than 20 and less than 50: 0 is false', () => {
      assert.isFalse(funcs.isInRange(0));
    });
    it('should take one number that returns true if the number is greater than 20 and less than 50: 60 is false', () => {
      assert.isFalse(funcs.isInRange(60));
    });
    it('should take one number that returns true if the number is greater than 20 and less than 50: 20 is false', () => {
      assert.isFalse(funcs.isInRange(20));
    });
    it('should take one number that returns true if the number is greater than 20 and less than 50: 50 is false', () => {
      assert.isFalse(funcs.isInRange(50));
    });
  });
  describe('isInteger', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isInteger, 'function');
    });
    it('should take a number that is an integer and returns true: true for 1', () => {
      assert.isTrue(funcs.isInteger(1));
    });
    it('should take a number that is an integer and returns true: false for 1.1', () => {
      assert.isFalse(funcs.isInteger(1.1));
    });
    it('should take a number that is an integer and returns true: true for 1.0', () => {
      assert.isTrue(funcs.isInteger(1.0));
    });
  });
  describe('fizzBuzz', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.fizzBuzz, 'function');
    });
    it('should take a number that returns fizzbuzz for multiples of 5 and 3, buzz for multiples of 5, fizz for multiples of 3, the number otherwise: 15 => fizzbuzz', () => {
      assert.equal(funcs.fizzBuzz(15), 'fizzbuzz');
    });
    it('should take a number that returns fizzbuzz for multiples of 5 and 3, buzz for multiples of 5, fizz for multiples of 3, the number otherwise: 5 => buzz', () => {
      assert.equal(funcs.fizzBuzz(5), 'buzz');
    });
    it('should take a number that returns fizzbuzz for multiples of 5 and 3, buzz for multiples of 5, fizz for multiples of 3, the number otherwise: 3 => fizz', () => {
      assert.equal(funcs.fizzBuzz(3), 'fizz');
    });
    it('should take a number that returns fizzbuzz for multiples of 5 and 3, buzz for multiples of 5, fizz for multiples of 3, the number otherwise: 4 => 4', () => {
      assert.equal(funcs.fizzBuzz(4), 4);
    });
  });
  describe('isPrime', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isPrime, 'function');
    });
  });describe('returnFirst', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.returnFirst, 'function');
    });
  });
  describe('returnLast', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.returnLast, 'function');
    });
  });
  describe('getArrayLength', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.getArrayLength, 'function');
    });
  });
  describe('incrementByOne', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.incrementByOne, 'function');
    });
  });
  describe('addItemToArray', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.addItemToArray, 'function');
    });
  });
  describe('addItemToFront', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.addItemToFront, 'function');
    });
  });
  describe('wordsToSentence', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.wordsToSentence, 'function');
    });
  });
  describe('contains', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.contains, 'function');
    });
  });
  describe('addNumbers', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.addNumbers, 'function');
    });
  });
  describe('averageTestScore', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.averageTestScore, 'function');
    });
  });
  describe('largestNumber', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.largestNumber, 'function');
    });
  });

});
