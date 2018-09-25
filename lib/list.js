module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        let store = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = callback(this.items[index]);
            store.push(item);
        }
        return store;
    }
};
