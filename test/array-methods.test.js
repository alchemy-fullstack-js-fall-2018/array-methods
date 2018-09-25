const assert = require('assert');
const List = require('../lib/array-methods')

describe('assumptions', () => {
    it('map', () => {
        const numbers = [1, 2, 3];
        const doubles = numbers.map(item => {
            return item * 2;
        });
        assert.deepEqual(doubles, [2, 4, 6]);
    });
    it('filter', () => {
        const numbers = [1, 2, 3];
        const filtered = numbers.filter(item => {
            return item > 1;
        });
        assert.deepEqual(filtered, [2, 3]);

    });
});

describe('list class', () => {
    it('map', () => {
        const numbers = new List ([1, 2, 3]);
        const doubles = numbers.map(item => {
            return item * 2;
        });
        assert.deepEqual(doubles, [2, 4, 6]);
    });
    it('filter', () => {
        const numbers = new List ([1, 2, 3]);
        const filtered = numbers.filter(item => {
            return item > 1;
        });
        assert.deepEqual(filtered, [2, 3]);
    });
});
