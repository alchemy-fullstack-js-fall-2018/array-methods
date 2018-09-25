module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        const newItems = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            newItems.push(callback(item));
        }
        return newItems;
    }

    filter(callback) {
        const newItems = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            if(callback(item)){
                newItems.push(item);
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
};
