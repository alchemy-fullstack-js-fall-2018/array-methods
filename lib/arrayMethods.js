module.exports = class List {
    constructor(items) {
        this.items = items;
    }
  
    map(items, callback) {
        let arr2 = [];
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i] === undefined) continue;
            arr2[i] = callback(this.items[i]);
        }
        return arr2;
    }

    filter(items, callback) {
        let arr2 = [];
        for(let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i]) === true) {
                arr2.push(this.items[i]);
            }
        }
        return arr2;
    }

    findIndex(items, callback) {
        for(let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i]) === true) {
                return i;
            } 
        }
        return -1;
    }

    reduce(callback, initial) {
        let accumulator = initial;
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i] === undefined) continue;
            accumulator = callback(accumulator, this.items[i]);
            if(!initial) {
                accumulator = this.items[0];
                initial = this.items[1];
            } continue;
        }
        return accumulator;
    }

    every(items, callback) {
        for(let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i]) !== true) {
                if(this.items[i] === undefined) continue; {
                    return false;
                }
            }
        }
        return true;
    }
};

