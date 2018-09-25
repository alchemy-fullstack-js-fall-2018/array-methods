module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        const result = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            result.push(callback(item));
        }
        return result;
    }
};
