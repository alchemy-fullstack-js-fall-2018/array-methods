const assert = require('assert');
const List = require('../lib/list');

describe('map', () => {

    it('returns an array of the same length', () => {
        const list = new List([1, 2, 3]);
        const mappedList = list.map(item => {
            return item;
        });
        assert.equal(mappedList.length, list.items.length);
    });

    it('returns an array of numbers where each value is x2 of the input array', () => {
        const list = new List([1, 2, 3]);
        const mappedList = list.map(item => {
            return item * 2;
        });
        assert.deepEqual(mappedList, [2, 4, 6]);
    });



});
