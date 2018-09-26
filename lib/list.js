const hasValue = (array, index) => array.hasOwnProperty(index);

module.exports = class List {
    constructor(items) {
        this.items = items;
    }


    map(callback) {
        let store = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = callback(this.items[index], index);
            if(hasValue(this.items, index)) {
                store[index] = item;
            }
        }
        return store;
    }

    filter(callback) {
        let store = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(hasValue(this.items, index) && callback(item, index)) {
                store[store.length] = item;
            }
        }        
        return store;
    }

    findIndex(callback) {
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(hasValue(this.items, index) && callback(item, index)){
                return index;
            }
        }
        return -1;
    }

    reduce(callback, initial) {
        let accumulator;
        initial !== undefined ? accumulator = initial : accumulator = this.items[0];
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(hasValue(this.items, index)) {
                accumulator = callback(accumulator, item, index);
            }
        }
        return accumulator;
    }

    every(callback) {
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(hasValue(this.items, index) && !callback(item, index)){
                return false;
            }
        }
        return true;
    }

    foreach(callback) {
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(hasValue(this.items, index)) {
                callback(item, index);
            }
        }
        return undefined;
    }
};
