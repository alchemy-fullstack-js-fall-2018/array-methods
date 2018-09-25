module.exports = class List {

    constructor(arr) {
        this.arr = arr;
    }
    
    map(callback) {
        const newArr = [];
        for(let i = 0; i < this.arr.length; i++) {
            if(this.arr.hasOwnProperty(i)) {
                newArr[i] = callback(this.arr[i]);
            }
        }
        return newArr;
    }

    filter(callback) {
        const newArr = [];
        for(let i = 0; i < this.arr.length; i++) {
            let item = this.arr[i];
            if(callback(item)) newArr[newArr.length] = item;
        }
        return newArr;
    }

    findIndex(callback) {
        for(let i = 0; i < this.arr.length; i++) {
            if(this.arr.hasOwnProperty(i)) {
                if(callback(this.arr[i])) return i;
            }
        }
        return -1;
    }

    reduce(callback, initialValue) {
        let acc = initialValue ? initialValue : 0;
        for(let i = 0; i < this.arr.length; i++) {
            if(this.arr.hasOwnProperty(i)) {
                let item = this.arr[i];
                acc = callback(acc, item);
            }
        }
        return acc;
    }

    every(callback) {
        for(let i = 0; i < this.arr.length; i++) {
            let item = this.arr[i];
            if(!callback(item)) return false;
        }
        return true;
    }


};
