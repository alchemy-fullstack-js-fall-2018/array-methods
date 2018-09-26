module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        const mapped = [];
        for(let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if(this.items.hasOwnProperty(i)) {
                mapped[i] = callback(item);
            }
        }
        return mapped;
    }
    
    filter(callback) {
        const filtered = [];
        for(let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if(callback(item)) {
                filtered[filtered.length] = item;
            }
        }
        return filtered;
    }

    findIndex(callback) {
        for(let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if(callback(item)) {
                return i;
            }
        }
        return -1;
    }

    // reduce(callback [, initialValue]) {

    // }


};
