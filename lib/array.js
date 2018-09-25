module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        let array = [];
        for (let index = 0; index < this.items.length; index++) {
            if(!this.items.hasOwnProperty(index)) continue;
            const item = this.items[index];
            const results = callback(item);
            array[index] = results;
        }
        return array;
    };

    filter(callback) {
        let array = [];
        for (let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i]) === true) {
                array.push(this.items[i])
            }
        }
        return array;
    }
}

 


