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




};
