module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    every(callback) {
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(!callback(item)) {
                return false;
            }
        }
    }
};
