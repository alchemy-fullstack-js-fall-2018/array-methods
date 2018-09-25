const assert = require('assert');
const List = require('../lib/arrayMethods');

describe('array methods', () => {

    let list;
    
    beforeEach(() => {
        list = new List([1, 2, 3, 4]);
    });

    describe('map', () => {
        it('should be a direct copy of original array', () => {
            const result = list.map(this.items, (n) => n);
            assert.deepEqual(result, [1, 2, 3, 4]);
        });
    });

    describe('filter', () => {
        it('returns new array of true items', () => {
            const result = list.filter(this.items, (n) => n < 4);
            assert.deepEqual(result, [1, 2, 3]);
        });
    });

    describe('findIndex', () => {
        it('returns first truthy item in array', () => {
            const result = list.findIndex(this.items, (n) => n > 3);
            assert.deepEqual(result, 3);
        });

        it('returns -1 if item not found', () => {
            const result = list.findIndex(this.items, (n) => n > 5);
            assert.deepEqual(result, -1);
        });
    });

    describe('reduce', () => {
        it('returns the sum of all array items', () => {
            const result = list.reduce(this.items, (a, b) => (a + b));
            assert.deepEqual(result, 10);
        });
    });
    
    describe('every', () => {
        it('returns true if every element described by the callback passes', () => {
            const result = list.every(this.items, (n) => n < 5);
            assert.equal(result, true);
        });

        it('returns false if one element fails callback check', () => {
            const result = list.every(this.items, (n) => n > 5);
            assert.equal(result, false);
        });
    });
});
