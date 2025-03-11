import { describe,test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

describe('Function sum', () => {
    test('should return the sum of two positive numbers', () => {
      const result = sum(2, 3);
      assert.equal(result, 5);  
    });
  
    test('should return the sum of a positive and a negative number', () => {
      const result = sum(5, -3);
      assert.equal(result, 2);  
    });
  
    test('should return the sum of two negative numbers', () => {
      const result = sum(-2, -3);
      assert.equal(result, -5);  
    });
  
    test('should return the sum of a number and zero', () => {
      const result = sum(7, 0);
      assert.equal(result, 7);  
    });
  
    test('should return 0 if both inputs are 0', () => {
      const result = sum(0, 0);
      assert.equal(result, 0);  
    });
  });