module.exports = class List {

    constructor(items) {
        this.items = items;
    }

    map(callback) {
        let arr = [];
        for(let i = 0; i < this.items.length; i++) {
            if(this.items.hasOwnProperty(i)) {
                const item = this.items[i];
                arr[i] = callback(item);
            }
        }
        return arr;
    }

    filter(callback) {
        let arr = [];
        for(let i = 0; i < this.items.length; i++) {
            if(this.items.hasOwnProperty(i)) {
                const item = this.items[i];
                if(callback(item)) {
                    arr[arr.length] = item;
                }
            }
        }
        return arr;
    }

    findIndex(callback) {
        for(let i = 0; i < this.items.length; i++) {
            if(this.items.hasOwnProperty(i)) {
                const item = this.items[i];
                if(callback(item)) {
                    return i;
                }
            }
        }
        return -1;
    }

    reduce(callback, initialValue) {
        
        let accumulator = 0;

        if(initialValue) {
            accumulator = initialValue;
        }

        for(let i = 0; i < this.items.length; i++) {
            if(this.items.hasOwnProperty(i)) {
                const item = this.items[i];
                accumulator = callback(accumulator, item);
            }
        }
        return accumulator;
    }

    every(callback) {
        for(let i = 0; i < this.items.length; i++) {
            if(this.items.hasOwnProperty(i)) {
                const item = this.items[i];
                if(!callback(item)) {
                    return false;
                }
            }
        }
        return true;
    }

};
