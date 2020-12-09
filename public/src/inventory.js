class Inventory {
    constructor() {
      this.inventory = [];
    }

    addItem(element) {
        this.inventory.push(element);
        return this.inventory;
    }

    returnInv() {
        return this.inventory;
    }

}
