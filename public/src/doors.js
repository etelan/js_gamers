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
var level_4_doors = [
  // Room 1
  new Door(100,300), 
  // Room 2
  new Door(200,250), 
  // Room 3
  new Door(350,250),
  // Room 4
  new Door(500,250)];

function level2doors(){
  for (i = 0; i < level_2_doors.length; i++) {
    level_2_doors[i].createDoor()
  }
}

function level4doors(){
  for (i = 0; i < level_4_doors.length; i++) {
    level_4_doors[i].createDoor()
  }
}
