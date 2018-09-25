module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    every(callback) {
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(this.items.hasOwnProperty(i)) {
                if(!callback(item)) {
                    return false;
                }
            }
        }
        return true;
    }

    map(callback) {
        let arr = [];
        for(let i = 0; i < this.items.length; i++) {
            if(this.items.hasOwnProperty(i)) {
                const item = this.items[i];
                arr[i] = callback(item);
            }
        }
        return arr;
    }
};
