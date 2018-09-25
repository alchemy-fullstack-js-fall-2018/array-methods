module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        let store = [];
        for(let index = 0; index < this.items.length; index++) {
            store.push(this.items[index]);
        }
        return store;
        // return callback(this.items);        
    }
};
