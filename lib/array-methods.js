module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        const newItems = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(this.items.hasOwnProperty(index)) {
                newItems[index] = callback(item);
            }
        }
        return newItems;
    }

    filter(callback) {
        const newItems = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(callback(item)){
                newItems[newItems.length] = item;
            }
        }
        return newItems;
    }

    findIndex(callback) {
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(callback(item)) {
                return index;
            }
        }
        return -1;
    }

    reduce(callback, initialValue) {
        let acc = initialValue !== undefined ? initialValue : this.items[0];
        let index = initialValue !== undefined ? 0 : 1;
        for(index; index < this.items.length; index++) {
            const item = this.items[index];
            acc = callback(acc, item);
        }
        return acc;
    }

    every(callback) {
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(callback(item) !== true) {
                return false;
            }
        }
        return true;
    }
};
