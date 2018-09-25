module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    every(callback) {
        console.log('items', this.items);
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(item !== undefined) {
                if(!callback(item)) {
                    return false;
                }
            }
        }
        return true;
    }
};
