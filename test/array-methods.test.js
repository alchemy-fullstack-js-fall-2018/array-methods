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
            beforeEach(() => {
                //eslint-disable-next-line
                const arr = [1, 2, ,3];
                list = new List(arr);
            });

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

describe('filter', () => {
    describe('array method assumptions', () => {
        
        it('returns new array of items that are true per callback', () => {
            const arr = [1, 2, 3, 4];
            const list = new List(arr);
            const greaterThanTwo = list.filter(item => {
                return item > 2;
            });
            assert.deepEqual(greaterThanTwo, [3, 4]);
        });

        it('any holes in array are skipped', () => {
            //eslint-disable-next-line
            const arr = [1, 2, , 3, 4];
            const list = new List(arr);
            const greaterThanTwo = list.filter(item => {
                return item > 2;
            });
            assert.deepEqual(greaterThanTwo, [3, 4]);
        });
    });
});

describe('findIndex', () => {
    describe('array method assumptions', () => {

        it('returns index of first item in array if passes callback test', () => {
            const arr = [1, 2, 3, 4];
            const list = new List(arr);
            const greaterThanTwo = list.findIndex(item => {
                return item > 2;
            });
    
            assert.deepEqual(greaterThanTwo, 2);
        });
    
        it('returns -1 if no items in array pass callback test', () => {
            const arr = [1, 2, 3];
            const list = new List(arr);
            const greaterThanThree = list.findIndex(item => {
                return item > 3;
            });
    
            assert.deepEqual(greaterThanThree, -1);
        });
    
        it('holes in array are skipped', () => {
            //eslint-disable-next-line
            const arr = [1, 2, , 4];
            const list = new List(arr);
            const greaterThanTwo = list.findIndex(item => {
                return item > 2;
            });
    
            assert.deepEqual(greaterThanTwo, 3);
        });
    });
});

describe('reduce', () => {
    describe('array method assumptions', () => {

        it('accumulator is returned after function call with initialValue being first element in array', () => {
            const arr = [1, 2, 3, 4];
            const list = new List(arr);
            const reducedArr = list.reduce((acc, item) => {
                return acc *= item;
            }, 2);

            assert.deepEqual(reducedArr, 48);
        });

        it('if no initialValue param, first element in array is set as initial value', () => {
            const arr = [2, 3, 4, 5];
            const list = new List(arr);
            const reducedArr = list.reduce((acc, item) => {
                return acc *= item;
            });

            assert.deepEqual(reducedArr, 120);
        });

        it('holes in array are skipped when initialValue is present', () => {
            //eslint-disable-next-line
            const arr = [2, , 4, 5];
            const list = new List(arr);
            const reducedArr = list.reduce((acc, item) => {
                return acc += item;
            }, 2);

            assert.deepEqual(reducedArr, 13);
        }); 

        it('holes in array are skipped when initialValue is not present', () => {
            //eslint-disable-next-line
            const arr = [2, 3, , 4, 5];
            const list = new List(arr);
            const reducedArr = list.reduce((acc, item) => {
                return acc += item;
            });

            assert.deepEqual(reducedArr, 14);
        }); 

        // it('holes in array are skipped when hole is first element of array', () => {
        //     //eslint-disable-next-line
        //     const arr = [ , 4, 5];
        //     const list = new List(arr);
        //     const reducedArr = list.reduce((acc, item) => {
        //         return acc += item;
        //     });

        //     assert.deepEqual(reducedArr, 9);
        // }); 
    }); 
});

describe('every', () => {
    describe('array method assumptions', () => {

        const isEven = item => {
            return item % 2 === 0;
        };
        it('returns true if all elements in array evaluate to true per callback', () => {
            const arr = [2, 4, 6];
            const list = new List(arr);
            const hasEvens = list.every((item) => {
                return isEven(item);
            });

            assert.deepEqual(hasEvens, true);
        });

        it('returns false if if any element in array evaluate to true per callback', () => {
            const arr = [2, 5, 6];
            const list = new List(arr);
            const hasEvens = list.every((item) => {
                return isEven(item);
            });

            assert.deepEqual(hasEvens, false);
        });

        it('any holes are skipped', () => {
            //eslint-disable-next-line
            const arr = [2, 5, , 6];
            const list = new List(arr);
            const hasEvens = list.every((item) => {
                return isEven(item);
            });

            assert.deepEqual(hasEvens, false);
        });
    });
});
