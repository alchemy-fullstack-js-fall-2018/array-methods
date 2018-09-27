module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        let array = [];
        for(let index = 0; index < this.items.length; index++) {
            if(!this.items.hasOwnProperty(index)) continue;
            const item = this.items[index];
            const results = callback(item);
            array[index] = results;
        }
        return array;
    }

    filter(callback) {
        let array = [];
        for(let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i]) === true) {
                array[array.length] = this.items[i];
            }
        }
        return array;
    }

    findIndex(callback) {
        for(let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i]) === true) {
                return i;
            }
        }
        return -1;
    }

    reduce(callback) {
        let accumulate = 0; 
        for(let i = 0; i < this.items.length; i++) {
            if(!this.items.hasOwnProperty(i)) continue; 
            accumulate = callback(accumulate, this.items[i]);
        }
        return accumulate;
    }

    every(callback) {
        for(let i = 0; i < this.items.length; i++) {
            if(callback(this.items) !== true) {
                return false;
            }
        }
        return true;
    }
};





