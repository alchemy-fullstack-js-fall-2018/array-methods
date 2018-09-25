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

});
