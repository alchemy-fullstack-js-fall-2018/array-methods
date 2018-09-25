const assert = require('assert');
const List = require('../lib/array-methods');

describe('map', () => {

    const isDouble = item => {
        return item * 2;
    };

    describe('map method tests', () => {
        it('returns an array where each item\'s value is doubled', () => {
            const list = new List([1, 3, 5, 7]);
            const doubleValues = list.map(item => {
                return isDouble(item);
            });

            assert.deepEqual(doubleValues, [2, 6, 10, 14]);
        });       
    });
});

describe('every', () => {

    const isEven = item => {
        return item % 2 === 0;
    };

    describe('every method tests', () => {
        it('returns false if any item in the array fails the test', () => {
            const list = new List([2, 4, 7, 6]);
            const allEvens = list.every(item => {
                return isEven(item);
            });

            assert.equal(allEvens, false);
        });

        it('returns true if all items in the array pass the test', () => {
            const list = new List([2, 4, 6, 8]);
            const allEvens = list.every(item => {
                return isEven(item);
            });

            assert.equal(allEvens, true);
        });
        
        it('returns true if all non-empty items in the array pass the test', () => {
            const list = new List([2, 4, , 6, , 8]);
            const allEvens = list.every(item => {
                return isEven(item);
            });

            assert.equal(allEvens, true);
        });
        
    });
});
