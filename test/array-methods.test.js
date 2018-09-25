const assert = require('assert');
const List = require('../lib/array-methods');


describe('map', () => {
    describe('array method assumptions', () => {
        let list;
        describe('array without holes', () => {
            beforeEach(() => {
                const arr = [1, 2, 3];
                list = new List(arr);
            });
            
            it('creates a new array', () => {
                const mappedList = list.map((item) => {
                    return item * 2;
                });
                assert.deepEqual(mappedList, [2, 4, 6]);
            });
    
            it('new length of array has same length as original array', () => {
                const mappedList = list.map((item) => {
                    return item * 2;
                });
                assert.deepEqual(mappedList.length, 3);
            });
        });
        
        describe('array with holes', () => {
            let list;
            beforeEach(() => {
                //eslint-disable-next-line
                const arr = [1, 2, ,3];
                list = new List(arr);
            })

            it('new array has holes if original array had holes', () => {
                const mappedList = list.map((item) => {
                    return item * 2;
                });
                //eslint-disable-next-line
                assert.deepEqual(mappedList, [2, 4, ,6]);
            });

        });

    });
});
