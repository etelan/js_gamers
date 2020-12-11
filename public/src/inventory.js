class Inventory {
    constructor() {
      this.heartInventory = ["heart","heart","heart"];
      this.keyInventory = [];
    }

    addItem(element) {

        // Heart
        if (element == "heart") {

            this.heartInventory.push(element);

            this.updateDisplay()

            return this.heartInventory;
        }

        // Key
        if (element == "key") {

            this.keyInventory.push(element);

            this.updateDisplay(element)

            return this.keyInventory;
        }

    }

    updateDisplay() {

        if (this.keyInventory.length == 1) {
            document.getElementById("keyDisplay").innerHTML = String(this.keyInventory.length) + " key";
        }

        if (this.keyInventory.length > 1) {
            document.getElementById("keyDisplay").innerHTML = String(this.keyInventory.length) + " keys";
        }

        if (this.keyInventory.length == 0) {
            document.getElementById("keyDisplay").innerHTML = String(this.keyInventory.length) + " keys";
        }


        if (this.heartInventory.length == 1) {
            document.getElementById("heartDisplay").innerHTML = String(this.heartInventory.length) + " heart";
        }

        if (this.heartInventory.length > 1) {
            document.getElementById("heartDisplay").innerHTML = String(this.heartInventory.length) + " hearts";
        }

        if (this.heartInventory.length == 0) {
            document.getElementById("heartDisplay").innerHTML = String(this.heartInventory.length) + " heart";
        }


    }

    returnHeartInv() {
        return this.heartInventory;
    }

    checkLife(){
      if (this.heartInventory.length == 0){
        playAudio("death");
      }
    }

}
