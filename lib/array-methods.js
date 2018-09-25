module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        const newNumbers = [];
        for(let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            newNumbers.push(callback(item));
        }
        return newNumbers;
    }
};
