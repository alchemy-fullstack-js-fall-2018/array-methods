module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        const mapped = [];
        for(let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if(this.items.hasOwnProperty(i)) {
                mapped[i] = callback(item);
            }
        }
        return mapped;
    }
    
    filter(callback) {
        const filtered = [];
        for(let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if(callback(item)) {
                filtered[filtered.length] = item;
            }
        }
        return filtered;
    }

    findIndex(callback) {
        for(let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if(callback(item)) {
                return i;
            }
        }
        return -1;
    }

    reduce(callback, initialValue) {
        let acc = (initialValue !== undefined ? initialValue : this.items[0]);
        let index = initialValue !== undefined ? 0 : 1;
        for(index; index < this.items.length; index++) {
            let item = this.items[index];
            acc = callback(acc, item);
        }
        return acc;
    }

    every(callback) {
        for(let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if(callback(item) !== true) {
                return false;
            }
        }
        return true;
    }
};
