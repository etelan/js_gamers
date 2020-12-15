class Door {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.id = this.createId();
  }
  createId() { 
    return Math.random().toString(36).substr(2, 9); 
  };

  createDoor() {
    var door = document.createElement('div');
    door.id = this.id;
    door.className = 'door';
    door.style.left = this.x + "px";
    door.style.top = this.y + "px";
    document.getElementById("container").appendChild(door);
  }
}

var level_5_doors = [new Door(550,0),new Door(0,300),new Door(250,350)];

for (i = 0; i < level_5_doors.length; i++) {
  level_5_doors[i].createDoor()
}
