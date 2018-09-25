module.exports = class List {
    constructor(items) {
        this.items = items;
    }
  
    map(items, callback) {
        let arr2 = [];
        for(let i = 0; i < this.items.length; i++) {
            arr2[i] = callback(this.items[i]);
        }
        return arr2;
    }






};

