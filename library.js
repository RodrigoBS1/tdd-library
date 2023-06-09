class Library {
    constructor () {
        this.contents = [];

    }
    displayContents () {
        return this.contents;
    }

    stock(inventory){
        this.contents.push(...inventory);
    }

    purchase(itemName){
        let soughtItem = this.contents.find(item => item.item === itemName)
        soughtItem.author--;
    }

    outOfStock (itemName) {
        let outItem = this.contents.find(item => item.item === itemName)
        outItem.quantity = 0;
    }

    notFound (itemName) {
        let outItem = this.contents.find(item => item.item === itemName)
        outItem = name;
    }
}

module.exports = Library;