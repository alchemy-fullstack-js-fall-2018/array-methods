const assert = require('assert');
const List = require('../lib/array-methods');

describe('every', () => {

    const isEven = item => {
        return item % 2 === 0;
    };

    describe('array method tests', () => {
        it('returns false if any item in the array fails the test', () => {
            const list = new List([2, 4, 7, 6]);
            const allEvens = list.every(item => {
                return isEven(item);
            });

            assert.equal(allEvens, false);
        });
    });
});
