const assert = require('assert');
const List = require ('../lib/array-methods.js');

describe('map', () => {

    function doubleMe(number) {
        return number * 2;
    }

    it('map: returns an array where each item has been transformed according to the callback', () => {
        const list = new List([1, 2, 3]);
        const result = list.map(doubleMe);
        assert.deepEqual(result, [2, 4, 6]);
    });

    it('map: skips holes in the list', () => {
        // eslint-disable-next-line
        const list = new List([1, , 3, 4]);
        const result = list.map(doubleMe);
        // eslint-disable-next-line
        assert.deepEqual(result, [2, , 6, 8]);
    });

});

describe('filter', () => {

    function isEven(number) {
        return number % 2 === 0;
    }

    it('filter: returns an array containing only the elements that meet the criteria in the callback', () => {
        const list = new List([1, 2, 3, 4]);
        const result = list.filter(isEven);
        assert.deepEqual(result, [2, 4]);
    });

});

describe ('findIndex', () => {

    function isGreaterThanNine(number) {
        return number > 9;
    }

    it('findIndex: returns the index of the first element that meets the criteria in the callback', () => {
        // eslint-disable-next-line
        const list = new List([6, , 9, 10, 12]);
        const result = list.findIndex(isGreaterThanNine);
        assert.equal(result, 3);
    });

    it('findIndex: returns -1 when no elements meet the criteria in the callback', () => {
        const list = new List ([1, 2, 3, 4]);
        const result = list.findIndex(isGreaterThanNine);
        assert.equal(result, -1);
    });

});

describe ('reduce', () => {

    function doubleAndSum(acc, number) {
        return acc + (2 * number);
    }

    it('reduce: returns a single reduced value based on the callback (no initial value)', () => {
        // eslint-disable-next-line
        const list = new List([2, , 3, 4]);
        const result = list.reduce(doubleAndSum);
        assert.equal (result, 18);
    });

    it('reduce: returns a single reduced value based on the callback (with initial value)', () => {
        // eslint-disable-next-line
        const list = new List([2, , 3, 4]);
        const result = list.reduce(doubleAndSum, 2);
        assert.equal (result, 20);
    });
});

describe ('every', () => {

    function isLetterA(element) {
        return element === 'A';
    }

    it('every: return true when all elements meet the criteria in callback', () => {
        const list = new List(['A', 'A', 'A', 'A']);
        const result = list.every(isLetterA);
        assert.equal (result, true);
    });

    it('every: return false when any element does not meet the criteria in callback', () => {
        const list = new List(['A', 'A', 'A', 'X']);
        const result = list.every(isLetterA);
        assert.equal (result, false);
    });

});
