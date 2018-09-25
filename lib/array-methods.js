module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        const mapped = [];
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            let value = callback(item);
            mapped[i] = value;
        }
        return mapped;
    }
};
