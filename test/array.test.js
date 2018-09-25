const assert = require('assert');
const List = require('../lib/array');

describe('test arrays',() => {

    let list;

    beforeEach(() => {
        list = new List([3, 5, , 7, 8]);
    })

    it('this should map a new list array', () => {
        const mapResults = list.map(item => {
             return item * 2;
        })
        assert.deepEqual(mapResults, [6, 10, , 14, 16,])
    })

    it ('this should filter and return a new array', () => {
        const filterResults = list.filter(item => {
            return item >= 4;
        })
        assert.deepEqual(filterResults, [5, 7, 8])
    })

    it ('this returns the first element of the index', () => {
        
    })

});


