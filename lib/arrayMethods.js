module.exports = class List {
    constructor(items) {
        this.items = items;
    }
  
    map(items, callback) {
        let arr2 = [];
        for(let i = 0; i < this.items.length; i++) {
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

    findIndex(arr, callback) {
        for(let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i]) === true) {
                return i;
            } 
        }
        return -1;
    }

    reduce(arr, callback) {
        let sum = 0;
        for(let i = 0; i < this.items.length; i++) {
            sum = callback(sum, this.items[i]);
        }
        return sum;
    }

    every(arr, callback) {
        for(let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i]) !== true) {
                return false;
            }
        }
        return true;
    }
};

