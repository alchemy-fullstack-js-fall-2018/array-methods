const assert = require('assert'); // built into node, assertion library 
const List = require('../lib/array-methods');

describe('map', () => {

    const addOne = item => {
        return item + 1;
    };

    it('returns true if the map method is working', () => {
        const numbers = [1, 2, 3, 4];
        const result = numbers.map(item => {
            return addOne(item);
        });

        assert.deepEqual(result, [2, 3, 4, 5]);
    });

    it('returns true if my map method is working', () => {
        const list = new List([1, 2, 3, 4, 5]);
        const result = list.map(item => {
            return addOne(item);
        });

        assert.deepEqual(result, [2, 3, 4, 5, 6]);
    });
});

describe('filter', () => {
    const isOdd = item => {
        return item % 2 === 1;
    };

    it('returns true if the filter method is working', () => {
        const numbers = [1, 2, 3, 4];
        const result = numbers.filter(item => {
            return isOdd(item);
        });
        assert.deepEqual(result, [1, 3]);
    });

    it('returns true if my filter method is working', () => {
        const list = new List([1, 2, 3, 4]);
        const result = list.filter(item => {
            return isOdd(item);
        });

        assert.deepEqual(result, [1, 3]);
    });
});

describe('findIndex', () => {
    const isOdd = item => {
        return item % 2 === 1;
    };

    it('returns the index of the first item whose callback returns true', () => {
        const numbers = [2, 3, 4];
        const result = numbers.findIndex(item => {
            return isOdd(item);
        });
        assert.equal(result, 1);
    });

    it('returns the index of the first item whose callback returns true', () => {
        const list = new List([2, 3, 4, 5]);
        const result = list.findIndex(item => {
            return isOdd(item);
        });
        assert.equal(result, 1);
    });
});

describe('reduce', () => {
    const reducer = (accumulator, currentValue) => {
        return accumulator + currentValue;
    };

    it('returns the total of the numbers in the array ', () => {
        const numbers = [1, 2, 3];
        const result = numbers.reduce((accumulator, currentValue) => {
            return reducer(accumulator, currentValue);
        });
        assert.equal(result, 6);
    });

    it('returns the total of the number in the array', () => {
        const list = new List([1, 2, 3]);
        const result = list.reduce((accumulator, currentValue) => {
            return reducer(accumulator, currentValue);
        });
        assert.equal(result, 6);
    });
});

describe('every', () => {
    const isOdd = item => {
        return item % 2 === 1;
    };
    
    it('returns false if any item in the array fails the test', () => {
        const list = new List([1, 3, 4, 7]);
        const result = list.every(item => {
            return isOdd(item);
        });
        assert.equal(result, false);
    });

    it('returns true if all items in the array pass the test', () => {
        const list = new List([1, 3, 5, 7]);
        const result = list.every(item => {
            return isOdd(item);
        });
        assert.equal(result, true);
    });
});

