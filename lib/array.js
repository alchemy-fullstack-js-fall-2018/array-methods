module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        let array = [];
        for (let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            const results = callback(item);
            array[index] = results;
            console.log(item, results, array);
        }
        return array;
    };
}

 


