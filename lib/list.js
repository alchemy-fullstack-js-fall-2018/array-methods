module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        let store = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = callback(this.items[index]);
            store.push(item);
        }
        return store;
    }

    filter(callback) {
        let store = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(callback(item)){
                store.push(item);
            }
        }        
        return store;
    }

    findIndex(callback) {
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(callback(item)){
                return index;
            }
        }
        return -1;
    }

    reduce(callback, initial) {

        let accumulator = initial;
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            accumulator = callback(accumulator, item);
        }
        return accumulator;
    }

    every(callback) {
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(!callback(item)){
                return false;
            }
        }
        return true;
    }


};
