module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        const results = [];
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const result = (callback(item));
            results[i] = result;
        }
        return results;
    }

    filter(callback) {
        const results = [];
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(callback(item)) {
                results[results.length] = item;
            }
        }
        return results;
    }

    findIndex(callback) {
        let result = -1;
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(callback(item)) {
                result = i;
                return result;
            }
        }
    }
};
