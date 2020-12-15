class Wall {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  createWall() {
    var wall = document.createElement('div');
    wall.className = 'box';
    wall.style.left = this.x + "px";
    wall.style.top = this.y + "px";
    document.getElementById("container").appendChild(wall);
  }
}

var level_5_walls = [new Wall(100,0),new Wall(350,0),new Wall(50,50),new Wall(100,50),new Wall(200,50),new Wall(300,50),new Wall(350,50),
new Wall(450,50),new Wall(200,100),new Wall(450,100),new Wall(0,150),new Wall(150,150),new Wall(200,150),new Wall(300,150),
new Wall(350,150),new Wall(400,150),new Wall(550,150),new Wall(100,200),new Wall(500,200),new Wall(50,250),new Wall(100,250),new Wall(200,250),
new Wall(300,250),new Wall(350,250),new Wall(400,250),new Wall(250,300),new Wall(300,300),new Wall(500,300),new Wall(50,350),new Wall(100,350),
new Wall(150,350),new Wall(400,350),new Wall(500,350)];


for (i = 0; i < level_5_walls.length; i++) {
    level_5_walls[i].createWall()
  }
