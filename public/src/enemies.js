class Enemy {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  createEnemy() {
    var enemy = document.createElement('div');
    enemy.className = 'enemy';
    enemy.style.left = this.x + "px";
    enemy.style.top = this.y + "px";
    enemy.style.backgroundImage = "url('../images/enemy8.gif')";
    document.getElementById("container").appendChild(enemy);
  }
}

var level_1_enemies = [new Enemy(300,300),new Enemy(300,350),new Enemy(100,100)];

for (i = 0; i < level_1_enemies.length; i++) {
  level_1_enemies[i].createEnemy()
}


var enemyInterval = setInterval(enemyMove, 1000);

function randomMovement(beings){
  for (i = 0; i < beings.length; i++) {
    let hor = beings[i].style.left.slice(0, -2);
    x = parseInt(hor);
    let ver = beings[i].style.top.slice(0, -2);
    y = parseInt(ver);
    let direction = Math.floor(Math.random() * 4);
    if (direction == 0 ){
      if (checkFree(x + 50, y, getItem('box'))){
        if ( (x != 550)&&(50 > 0) ) {
          beings[i].style.left = (x + 50) + 'px';
        }
      }
    }
    else if(direction == 1 )  {
      if (checkFree(x - 50, y, getItem('box'))){
        if ( (x != 0)&&(-50 < 0) ) {
          beings[i].style.left = (x - 50) + 'px';
        }
      }
    }
    else if(direction == 2 )  {
      if (checkFree(x, y - 50, getItem('box'))){
        if ( (y != 0)&&(-50 < 0) ) {
          beings[i].style.top = (y - 50) + 'px';
        }
      }
    }
    else {
      if (checkFree(x, y + 50, getItem('box'))){
        if ( (y != 350)&&(50 > 0) ) {
          beings[i].style.top = (y + 50) + 'px';
        }
      }
    }
  }
}

function enemyMove() {
  let enemies=document.getElementsByClassName('enemy');
  randomMovement(enemies)
}
