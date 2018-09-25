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
        const result = list.map(item=> {
            return addOne(item);
        });

        assert.deepEqual(result, [2, 3, 4, 5, 6]);
    });
});
