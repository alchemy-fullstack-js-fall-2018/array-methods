const assert = require('assert');
const List = require('../lib/list');

describe('map', () => {

    it('returns an array of the same length', () => {
        const list = new List([1, 2, 3]);
        const mappedList = list.map(item => {
            return item;
        });
        assert.equal(list.items.length, mappedList.length);
    });



});
