/*eslint-disable no-sparse-arrays*/


const assert = require('assert');
const List = require('../lib/list');

describe('map', () => {

    it('returns an array of the same length', () => {
        const list = new List([1, 2, 3]);
        const mappedList = list.map(item => item);
        assert.equal(mappedList.length, list.items.length);
    });

    it('returns an array of numbers where each value is x2 of the input array', () => {
        const list = new List([1, 2, 3]);
        const mappedList = list.map(item => item * 2);
        assert.deepEqual(mappedList, [2, 4, 6]);
    });

    it('preserves holes', () => {
        const list = new List([undefined,, 2, 3]);
        const mappedList = list.map(item => item);
        assert.deepEqual(mappedList, [undefined,, 2, 3]);        
    });

    it('uses index', () => {
        const list = new List([1, 2, 3]);
        const mappedList = list.map((item, index) => item * (index + 1));
        assert.deepEqual(mappedList, [1, 4, 9]);
    });
});

describe('filter', () => {

    it('returns an array of strictly matching values', () => {
        const list = new List([1, 2, 3]);
        const filteredList = list.filter(item => item % 2 === 0);
        assert.equal(filteredList, 2);
    });

    it('returns an array of loosely matching values', () => {
        const list = new List([1, 2, 3]);
        const filteredList = list.filter(item => item == '2');
        assert.equal(filteredList, 2);
    });

    it('skips holes', () => {
        const list = new List([1,, 2, 3]);
        const filteredList = list.filter(item => item % 2 === 0);
        assert.equal(filteredList, 2);
    });

    it('uses index', () => {
        const list = new List([1, 1, 3]);
        const filteredList = list.filter((item, index) => item === index);
        assert.equal(filteredList, 1);
    });

    // it('doesn\'t skip undefineds', () => {
    //     const list = new List([1, undefined, 2, 3]);
    //     const filteredList = list.filter(item => item % 2 === 0);
    //     assert.equal(filteredList, 2);
    // });
});

describe('findIndex', () => {

    it('returns the index of the first strictly matching value', () => {
        const list = new List([1, 2, 3]);
        const foundIndex = list.findIndex(item => item % 2 === 0);
        assert.equal(foundIndex, 1);
    });

    it('returns the index of the first loosely matching value', () => {
        const list = new List([1, 2, 3]);
        const foundIndex = list.findIndex(item => item == '2');
        assert.equal(foundIndex, 1);
    });

    it('returns -1 if nothing matches', () => {
        const list = new List([1, 2, 3]);
        const foundIndex = list.findIndex(item => item % 5 === 0);
        assert.equal(foundIndex, -1);
    });

    it('skips holes', () => {
        const list = new List([1,, 2, 3]);
        const foundIndex = list.findIndex(item => item == '2');
        assert.equal(foundIndex, 2);
    });

    it('uses index', () => {
        const list = new List([1, 1, 3]);
        const foundIndex = list.findIndex((item, index) => item === index);
        assert.equal(foundIndex, 1);
    });
});

describe('reduce', () => {

    it('returns a numerical accumulator after iterating through the array', () => {
        const list = new List([1, 2, 3]);
        const reducedList = list.reduce((accumulator, item) => accumulator + (item * 2), 0);
        assert.equal(reducedList, 12);
    });
    it('returns an array accumulator after iterating through the array', () => {
        const list = new List([1, 2, 3]);
        const reducedList = list.reduce((accumulator, item) => {
            accumulator.push(item);
            return accumulator;
        }, []);
        assert.deepEqual(reducedList, [1, 2, 3]);
    });
    it('skips holes', () => {
        const list = new List([1,, 2, 3]);
        const reducedList = list.reduce((accumulator, item) => {
            accumulator.push(item);
            return accumulator;
        }, []);
        assert.deepEqual(reducedList, [1, 2, 3]);
    });
    it('uses index', () => {
        const list = new List([1, 2, 3]);
        const reducedList = list.reduce((accumulator, item, index) => accumulator + (item * index), 0);
        assert.equal(reducedList, 8);
    });

});

describe('every', () => {

    it('returns true if all items return true or truthy value', () => {
        const list = new List([1, 2, 3]);
        const everiedList = list.every(item => item < 5);
        assert.equal(everiedList, true);
    });

    it('returns false if not all items return true or truthy value', () => {
        const list = new List([1, 2, 3]);
        const everiedList = list.every(item => item < 3);
        assert.equal(everiedList, false);
    });

    it('skips holes', () => {
        const list = new List([1,, 2, 3]);
        const everiedList = list.every(item => item < 5);
        assert.equal(everiedList, true);
    });

    it('uses index', () => {
        const list = new List([1, 2, 3]);
        const everiedList = list.every((item, index) => item === index + 1);
        assert.equal(everiedList, true);
    });
});

describe('foreach', () => {

    it('returns undefined', () => {
        const list = new List([1, 2, 3]);
        const foreachedList = list.foreach(item => item);
        assert.equal(foreachedList, undefined);        
    });

    it('does the right number of actions', () => {
        const list = new List([1, 2, 3]);
        let actions = 0;
        list.foreach(() => actions += 1);
        assert.equal(actions, 3);        
    });

    it('returns the list of actions', () => {
        const list = new List([1, 2, 3]);
        let actions = [];
        list.foreach(item => {
            /*eslint-disable-next-line*/
            const action = () => console.log(item);
            actions.push(action.toString());
        });
        assert.deepEqual(actions, ['() => console.log(item)', '() => console.log(item)', '() => console.log(item)']);
    });

    it('skips holes', () => {
        const list = new List([1,, 2, 3]);
        let actions = 0;
        list.foreach(() => actions += 1);
        assert.equal(actions, 3);
    });

    it('uses index', () => {
        const list = new List([1, 2, 3]);
        let indices = [];
        list.foreach((item, index) => indices.push(index));
        assert.deepEqual(indices, [0, 1, 2]);
    });
    
});

