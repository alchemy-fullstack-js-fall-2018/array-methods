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

        it('returns an array where empty items are returned as empty in the same position', () => {
            /* eslint-disable-next-line */
            const list = new List([1, 3, , 5, , 7]);
            const doubleValues = list.map(item => {
                return isDouble(item);
            });
            /* eslint-disable-next-line */
            assert.deepEqual(doubleValues, [2, 6, , 10, , 14]);
        });       

    });

});

describe('filter', () => {

    const isEven = item => {
        return item % 2 === 0;
    };

    describe('filter method tests', () => {

        it('returns an array containing only items that pass filter criteria', () => {
            const list = new List([1, 4, 5, 6, 7]);
            const filtered = list.filter(item => {
                return isEven(item);
            });

            assert.deepEqual(filtered, [4, 6]);
        });    

        it('skips empty items and does not return them', () => {
            /* eslint-disable-next-line */
            const list = new List([, 4, 5, 6, , 7]);
            const filtered = list.filter(item => {
                return isEven(item);
            });

            assert.deepEqual(filtered, [4, 6]);
        });       

    });
    
});

describe('findIndex', () => {

    const isEven = item => {
        return item % 2 === 0;
    };

    describe('findIndex method tests', () => {

        it('returns the index of the first item in the array with a callback that returns true or truthy', () => {
            const list = new List([1, 4, 5, 6, 7]);
            const index = list.findIndex(item => {
                return isEven(item);
            });

            assert.deepEqual(index, 1);
        });     

        it('skips empty items', () => {
            /* eslint-disable-next-line */
            const list = new List([1, , 4, 5, 6, 7]);
            const index = list.findIndex(item => {
                return isEven(item);
            });

            assert.deepEqual(index, 2);
        });
        
        it('returns -1 if no item in the array has a callback that returns true or truthy', () => {
            const list = new List([1, 3, 5, 7]);
            const index = list.findIndex(item => {
                return isEven(item);
            });

            assert.deepEqual(index, -1);
        });  

    });
    
});

describe('reduce', () => {

    const reducer = (accumulator, currentValue) => {
        accumulator = accumulator + currentValue;
        return accumulator;

    };
    
    describe('reduce method tests', () => {
        
        it('returns an the sum of all items in the array plus an intial value', () => {
            const list = new List([1, 4, 5, 6]);
            const sum = list.reduce((accumulator, currentValue) => {
                return reducer(accumulator, currentValue);
            }, 5);

            assert.deepEqual(sum, 21);
        });
        
        it('returns an the sum of all items in the array when no initial value is provided', () => {
            const list = new List([1, 4, 5, 6]);
            const sum = list.reduce((accumulator, currentValue) => {
                return reducer(accumulator, currentValue);
            });

            assert.deepEqual(sum, 16);
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
            /* eslint-disable-next-line */
            const list = new List([2, 4, , 6, , 8]);
            const allEvens = list.every(item => {
                return isEven(item);
            });

            assert.equal(allEvens, true);
        });
        
    });
});
