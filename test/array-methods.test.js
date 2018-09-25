const assert = require('assert');
const List = require('../lib/array-methods');


describe('map', () => {
    describe('array method assumptions', () => {
        it('creates a new array', () => {
            const arr = [1, 2, 3];
            const list = new List(arr);
            const mappedList = list.map((item) => {
                return item * 2;
            });
            assert.notEqual(mappedList, arr);
            assert.deepEqual(mappedList, [2, 4, 6]);
        });

        it('new array has holes if original array had holes', () => {
            //eslint-disable-next-line
            const arr = [1, 2, ,3];
            const list = new List(arr);
            const mappedList = list.map((item) => {
                return item * 2;
            });
            assert.notEqual(mappedList, arr);
            //eslint-disable-next-line
            assert.deepEqual(mappedList, [2, 4, ,6]);
        });

        it('new length of array has same length as original array', () => {
            const arr = [1, 2, 3];
            const list = new List(arr);
            const mappedList = list.map((item) => {
                return item * 2;
            });
            assert.deepEqual(mappedList.length, 3);
        });
    });
});
