const assert = require('assert');
const List = require('../lib/list');

describe('assumptions', () => {
    it('map will execute a callback on each item in an array', () => {
        const numbers = [2, 5, 3];
        const addedTwo = numbers.map(item => item + 2);
        assert.deepEqual(addedTwo, [4, 7, 5]);
    });

    it('map will skip empty array positions', () => {
        /* eslint-disable-next-line */
        const numbers = [2,, 3];
        const addedTwo = numbers.map(item => item + 2);
        /* eslint-disable-next-line */
        assert.deepEqual(addedTwo, [4,, 5]);
    });

    it('filter will return items that meet a condition', () => {
        const numbers = [3, 4, 6];
        const greaterThanFour = numbers.filter(item => item > 4);
        assert.deepEqual(greaterThanFour, [6]);
    });

    it('findIndex will return the index of the first true item', () => {
        const numbers = [4, 5, 8];
        const greaterThanFive = numbers.findIndex(item => item > 5);
        assert.equal(greaterThanFive, 2);
    });

    it('reduce will add together the items of an array', () => {
        const numbers = [4, 8, 10];
        const reduction = numbers.reduce(((accumulator, item) => accumulator + item), 10);
        assert.equal(reduction, 32);
    });

    it('every will return true if all items return true or truthy', () => {
        const numbers = [3, 5, 6];
        const isTrue = numbers.every(item => item < 10);
        assert.equal(isTrue, true);
    });

    
});

const double = item => {
    return item * 2;
};
const isOdd = item => {
    return item % 2 === 1;
};

describe('map', () => {
    it('will execute a callback on each item in an array', () => {
        const list = new List([3, 6, 9]);
        const doubled = list.map(item => {
            return double(item);
        });
        assert.deepEqual(doubled, [6, 12, 18]);
    });

    it('will skip empty array positions', () => {
        /* eslint-disable-next-line */
        const list = new List([2, , 4]);
        const doubled = list.map(item => {
            return double(item);
        });
        /* eslint-disable-next-line */
        assert.deepEqual(doubled, [4, , 8]);
    });

});

describe('filter', () => {
    it('will return items that meet a condition', () => {
        const list = new List([2, 3, 4, 5]);
        const odds = list.filter(item => {
            return isOdd(item);
        });
        assert.deepEqual(odds, [3, 5]);
    });
});

describe('findIndex', () => {
    it('will return the index of the first true item', () => {
        const list = new List([2, 4, 5, 7]);
        const firstIndex = list.findIndex(item => {
            return item === 7;
        });
        assert.equal(firstIndex, 3);
    });

    it('will return -1 if no match is found', () => {
        const list = new List([2, 4, 5, 7]);
        const noIndex = list.findIndex(item => {
            return item === 3;
        });
        assert.equal(noIndex, -1);
    });
});

describe.skip('reduce', () => {
    it('will add all array items together', () => {
        const list = new List([4, 5, 10]);
        const reduction = list.reduce((accumulator, item) => accumulator + item);
        assert.equal(reduction, 19);        
    });

    it('will add all items to a supplied initial value', () => {
        const list = new List([4, 5, 10]);
        const reduction = list.reduce(((accumulator, item) => accumulator + item), 1);
        assert.equal(reduction, 20);
    });
});

describe('every', () => {
    it('will return true if all items return true or a truthy value', () => {
        const list = new List([2, 4, 5, 8]);
        const isTrue = list.every(item => item > 1);
        assert.equal(isTrue, true);
    });

    it('will return false if one element is false or falsy', () => {
        const list = new List([2, 4, 5, 8]);
        const isFalse = list.every(item => item > 3);
        assert.equal(isFalse, false);
    });
});
