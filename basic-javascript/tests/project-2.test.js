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
    it('returns false when number is negative', () => {
      assert.isFalse(funcs.isPrime (-1))
    });
    it('returns false if number is 1', () => {
      assert.isFalse(funcs.isPrime (1));
    });
    it('returns false if number is 0', () => {
      assert.isFalse(funcs.isPrime (0));
    });
    it('returns true is number is prime', () => {
      assert.isTrue(funcs.isPrime (5));
    });
    it('returns false if number is non prime', () => {
      assert.isFalse(funcs.isPrime (4));
    });

  });describe('returnFirst', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.returnFirst, 'function');
    });
    it('return true when first index of array is returned', () => {
      assert.equal(funcs.returnFirst ([1, 2, 3]), 1);
    });
  });

  describe('returnLast', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.returnLast, 'function');
    });
    it('return true when last index of array is returned', () => {
      assert.equal(funcs.returnLast ([1, 2, 3]), 3);
    });
    it('return undefined when array is empty', () => {
      assert.equal(funcs.returnLast ([]), undefined);
    });
  });

  describe('getArrayLength', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.getArrayLength, 'function');
    });
    it('return length of array', () => {
    assert.equal(funcs.getArrayLength ([1, 2, 3]), 3);
    });
    it('return 0 if array is empty', () => {
    assert.equal(funcs.getArrayLength ([]), 0);
    });
  });

  describe('incrementByOne', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.incrementByOne, 'function');
    });
    it('return true if incremented by one', () => {
    assert.deepEqual(funcs.incrementByOne([1, 2, 3]), [2, 3, 4]);
    });
    it('return true if not increm by one', () => {
    assert.deepEqual(funcs.incrementByOne([]), []);
    });
  });

  describe('addItemToArray', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.addItemToArray, 'function');
    });
    it('return true when item is added to array', () => {
    assert.deepEqual(funcs.addItemToArray([1, 2, 3], 4), [1, 2, 3, 4]);
    });
    it('return true when item is added to array', () => {
    assert.deepEqual(funcs.addItemToArray([], 1), [1]);
    });
  });

  describe('addItemToFront', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.addItemToFront, 'function');
    });
    it('return true when item is added to beginning of array', () => {
    assert.deepEqual(funcs.addItemToFront([1, 2, 3], 0), [0, 1, 2, 3]);
    });
    it('return true when item is added to beginning of array', () => {
    assert.deepEqual(funcs.addItemToFront([], 0), [0,]);
    });
  });

  describe('wordsToSentence', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.wordsToSentence, 'function');
    });
    it('return true when a word is added to words array', () => {
    assert.equal(funcs.wordsToSentence(['hello', 'there', 'friend']), 'hello there friend');
    });
    it('returns one word when only one array item exists', () => {
    assert.equal(funcs.wordsToSentence(['hello']), 'hello');
    });
    it('returns empty string when no array elements exist', () => {
    assert.equal(funcs.wordsToSentence([]), '');
    });
  });

  describe('contains', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.contains, 'function');
    });
    it('returns true when item is in array', () => {
    assert.isTrue(funcs.contains([1, 2, 3], 2));
  });
  it('returns false when item is not in array', () => {
  assert.isFalse(funcs.contains([1, 2, 3], 4));
    });
    it('returns false when array is empty', () => {
    assert.isFalse(funcs.contains([], 2));
    });
  });

  describe('addNumbers', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.addNumbers, 'function');
    });
    it('returns sum of all nums in array', () => {
    assert.equal(funcs.addNumbers([1, 2, 3]), 6);
    });
    it('returns the number when only one number in array', () => {
    assert.equal(funcs.addNumbers([1]), 1);
    });
    it('returns 0 when array is empty', () => {
    assert.equal(funcs.addNumbers([]), 0);
    });
  });

  describe('averageTestScore', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.averageTestScore, 'function');
    });
    it('returns average of numbers in array', () => {
    assert.equal(funcs.averageTestScore([90, 95, 70]), ((90 + 95 + 70) / 3));
    });
    it('returns number when only one elemement in array', () => {
    assert.equal(funcs.averageTestScore([90]), 90);
    });
  });

  describe('largestNumber', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.largestNumber, 'function');
    });
    it('returns largest number in array', () => {
    assert.equal(funcs.largestNumber([90, 95, 70]), 95);
    });
    it('return number when only one element in array', () => {
    assert.equal(funcs.averageTestScore([90]), 90);
    });
    it('return undefined when zero elements in array', () => {
    assert.deepEqual(funcs.averageTestScore([]), NaN);
    });
  });

});
