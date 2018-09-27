module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    map(callback) {
        let newArr = [];
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(this.items.hasOwnProperty(i)) {
                newArr[i] = callback(item);
            }
        }
        return newArr; 
    }

    filter(callback) {
        let newArr = [];
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(callback(item)) {
                newArr[newArr.length] = item;
            }
        }
        return newArr;
    }

    findIndex(callback) {
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(callback(item)) {
                return i;
            }
        }
        return -1;
    }

    reduce(callback, initVal) {
        if(!initVal) {
            for(let i = 0; i < this.items.length; i++) {
                if(this.items[i]) {
                    let acc = this.items[i];
                    for(let j = i + 1; j < this.items.length; j++) {
                        const item = this.items[j];
                        if(callback(acc, item)) {
                            acc = callback(acc, item);
                        }
                    }
                    return acc;
                }
            }      
        } 
        else {
            let acc = initVal;
            for(let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                if(callback(acc, item)) {
                    acc = callback(acc, item);
                }
            }
            return acc;
        }
    }

    every(callback) {
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(!callback(item)) {
                return false;
            }
        }
        return true;
    }
};
