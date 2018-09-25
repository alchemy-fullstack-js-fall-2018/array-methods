module.exports = class List {

    constructor(items, currentValue) {
        this.items = items;
        this.currentValue = currentValue;
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
                    arr.push(item);
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

    reduce(callback, currentValue) {
        currentValue = this.currentValue;
        for(let i = 0; i < this.items.length; i++) {
            if(this.items.hasOwnProperty(i)) {
                const item = this.items[i];
                currentValue = callback(item, currentValue);
            }
        }
        return currentValue;
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
