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

    filter(callback) {
        const filtered = [];
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            let value = callback(item);
            if(value){
                filtered[filtered.length] = item;
            }
        }
        return filtered;
    }

    findIndex(callback) {
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(callback(item)){
                return i;
            }
        }
        return -1;


    }
};

