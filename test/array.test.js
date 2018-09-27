/* eslint no-spare-arrays: off*/

const assert = require('assert');
const List = require('../lib/array');

describe('test arrays', () => {

    let list;
  
    beforeEach(() => {
        
        //eslint-disable-line
        /* eslint no-spare-arrays: off*/
        list = new List([3, 5, , 7, 8]);
    });

    it('this should map a new list array', () => {
        const mapResults = list.map(item => {
            return item * 2;
        });
        assert.deepEqual(mapResults, [6, 10, , 14, 16]);
    });

    it ('this should filter and return a new array', () => {
        const filterResults = list.filter(item => {
            return item >= 4;
        });
        assert.deepEqual(filterResults, [5, 7, 8]);
    });

    it ('this returns the first element of the index', () => {
        const findIndex = list.findIndex(item => {
            return item < 6;
        });
        assert.deepEqual(findIndex, 0);
    });

    it ('reduces all the values in the array to a single output', () => {
        const sum = list.reduce((acc, item) => {
            return acc + item;
        });
        assert.deepEqual(sum, 23);
    });

    it ('this verifies if all items in array are true', () => {
        const checkAll = list.every(item => {
            return item < 15;
        });
        assert.deepEqual(checkAll, false);
    });

    it ('this verifies if all items in array are true', () => {
        const checkAll = list.every(item => {
            return item > 15;
        });
        assert.deepEqual(checkAll, false);
    });
});

    
