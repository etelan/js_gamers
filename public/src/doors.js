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

var level_2_doors = [new Door(200,0),new Door(0,300),new Door(250,300)];

for (i = 0; i < level_2_doors.length; i++) {
  level_2_doors[i].createDoor()
}
