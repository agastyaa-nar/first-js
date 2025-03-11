import { describe, test } from 'node:test';
import sum from './index.js'; 
import assert from 'node:assert';

describe('Function sum', () => {
    test('should return the sum of two positive numbers', () => {
        const result = sum(2, 3);
        assert.equal(result, 5);
    });

    test('should return the sum of a number and zero', () => {
        const result = sum(7, 0);
        assert.equal(result, 7);
    });

    test('should return 0 if both inputs are 0', () => {
        const result = sum(0, 0);
        assert.equal(result, 0);
    });

    test('should return 0 if negative number passed on numB parameter', () => {
        const result = sum(5, -3);
        assert.equal(result, 0);
    });

    test('should return 0 if negative number passed on numA parameter', () => {
        const result = sum(-5, 3);
        assert.equal(result, 0);
    });

    test('should return 0 if string passed on numB parameter', () => {
        const result = sum(5, '5');
        assert.equal(result, 0);
    });

    test('should return 0 if string passed on numA parameter', () => {
        const result = sum('5', 5);
        assert.equal(result, 0);
    });
});
