class Inventory {
    constructor() {
      this.heartInventory = [];
    }

    addItem(element) {
        
        if (element == "heart") {

            this.heartInventory.push(element);

            if (this.heartInventory.length == 1) {
                document.getElementById("heartDisplay").innerHTML = String(this.heartInventory.length) + " heart";
            }

            if (this.heartInventory.length > 1) {
                document.getElementById("heartDisplay").innerHTML = String(this.heartInventory.length) + " hearts";
            }

            return this.heartInventory;
        }
    }

    returnInv() {
        return this.heartInventory;
    }

}
