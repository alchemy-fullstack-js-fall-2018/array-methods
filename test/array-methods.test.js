const assert = require('assert');
const List = require('../lib/array-methods');

describe('map', () => {

    describe('assumptions', () => {

        it('returns each value in array position by 1', () => {
            const numbers = [1, 2, 3];
            const newNumbers = numbers.map(item => item + 1);
            assert.deepEqual(newNumbers, [2, 3, 4]);
        });

        it('returns same length as original array', () => {
            const numbers = [1, 2, 3];
            const result = numbers.map(item => item + 1).length;
            assert.equal(result, 3);
        });

    });

    it('returns each value in array position by 1', () => {
        const list = new List([1, 2, 3]);
        const newNumbers = list.map(item => item + 1);
        assert.deepEqual(newNumbers, [2, 3, 4]);
    });

    it('returns same length as original array', () => {
        const list = new List ([1, 2, 3]);
        const result = list.map(item => item + 1).length;
        assert.equal(result, 3);
    });
});

describe('filter', () => {

    describe('assumptions', () => {

        it('returns only even numbers within the array', () => {
            const numbers = [1, 2, 3, 4];
            const result = numbers.filter((item) => item % 2 === 0);
            assert.deepEqual(result, [2, 4]);
        });

        it('returns truthly value', () => {
            const numbers = [1, 2, 3, 4];
            const result = numbers.filter((item) => item == '2');
            assert.deepEqual(result, [2]);
        });

    });
    it('returns only even numbers within the array', () => {
        const list = new List([1, 2, 3, 4]);
        const result = list.filter((item) => item % 2 === 0);
        assert.deepEqual(result, [2, 4]);
    });

    it('returns truthly value', () => {
        const list = new List([1, 2, 3, 4]);
        const result = list.filter((item) => item == '2' || item == '4');
        assert.deepEqual(result, [2, 4]);
    });
});

describe('findIndex', () => {

    describe('assumptions', () => {

        it('finds the first index that is greater than 10', () => {
            const numbers = [1, 10, 14];
            const result = numbers.findIndex((item) => item > 10);
            assert.equal(result, 2);
        });

        it('if no index is found return -1', () => {
            const numbers = [1, 2, 4];
            const result = numbers.findIndex((item) => item > 10);
            assert.equal(result, -1);
        });

    });

    it('finds the first index that is greater than 10', () => {
        const list = new List([1, 10, 14]);
        const result = list.findIndex((item) => item > 10);
        assert.equal(result, 2);
    });

    it('if no index is found return -1', () => {
        const list = new List([1, 2, 4]);
        const result = list.findIndex((item) => item > 10);
        assert.equal(result, -1);
    });
});

describe('reduce', () => {

    describe('assumptions', () => {

        it('returns sum of an array', () => {
            const numbers = [1, 2, 3, 4];
            const sum = numbers.reduce((acc, item) => acc + item);
            assert.equal(sum, 10);
        });

    });

    it('returns sum of an array', () => {
        const list = new List([1, 2, 3, 4]);
        const sum = list.reduce(((acc, item) => acc + item), 0);
        assert.equal(sum, 10);
    });
});
