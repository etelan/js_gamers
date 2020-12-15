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

var level_2_walls = [new Wall(50,0),new Wall(50,50),new Wall(50,100),
  new Wall(50,150),new Wall(50,200),new Wall(50,300),new Wall(50,350),
  new Wall(150,50),new Wall(150,100),new Wall(150,150),new Wall(150,200),
  new Wall(150,250),new Wall(150,300),new Wall(200,300),new Wall(300,300),
  new Wall(350,300),new Wall(400,300),new Wall(450,300),new Wall(500,300),
  new Wall(500,250),new Wall(500,200),new Wall(500,150),new Wall(500,100),
  new Wall(500,50),new Wall(550,50),new Wall(450,50),new Wall(400,50),
  new Wall(350,50),new Wall(300,50),new Wall(250,50),new Wall(200,50)];

var level_4_walls = [
  // WALL 1
  new Wall(100,0),
  new Wall(100,50),
  new Wall(100,100),
  new Wall(100,150),
  new Wall(100,200),
  new Wall(100,250),
  // Door
  new Wall(100,350),

  // WALL 1.5
  new Wall(150,250),
  
  // WALL 2
  new Wall(250,0),
  new Wall(250,50),
  new Wall(250,100),
  new Wall(250,150),
  new Wall(250,200),
  new Wall(250,250),

  // WALL 2.5
  new Wall(300,250),

  // WALL 3
  new Wall(400,0),
  new Wall(400,50),
  new Wall(400,100),
  new Wall(400,150),
  new Wall(400,200),
  new Wall(400,250),

  // WALL 3.5
  new Wall(450,250),
  new Wall(550,250),

]


function level4walls(){
  for (i = 0; i < level_4_walls.length; i++) {
    level_4_walls[i].createWall()
  }
}


function level2walls(){
  for (i = 0; i < level_2_walls.length; i++) {
    level_2_walls[i].createWall()
  }
}
