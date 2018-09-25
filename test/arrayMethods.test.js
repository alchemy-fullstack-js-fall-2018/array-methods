const assert = require('assert');
const List = require('../lib/arrayMethods');

describe('array methods', () => {

    let list;
    
    beforeEach(() => {
        list = new List([1, 2, 3, 4]);
    });

    describe('map', () => {
        it('should be a direct copy of original array', () => {
            const result = list.map(this.items, (n) => {
                return n;
            });
            assert.deepEqual(result, [1, 2, 3, 4]);
        });
    });


});
