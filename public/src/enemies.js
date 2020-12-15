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
    enemy.style.backgroundImage = "url('../images/enemy4.gif')";
    document.getElementById("container").appendChild(enemy);
  }
}

var level_1_enemies = [new Enemy(250,350),new Enemy(450,100),new Enemy(100,100)];

var level_2_enemies = [new Enemy(300,300),new Enemy(300,350),new Enemy(100,100),
  new Enemy(200,200),new Enemy(250,200),new Enemy(300,200),new Enemy(350,200),
  new Enemy(400,200),new Enemy(450,200),new Enemy(200,250),new Enemy(250,250),
  new Enemy(300,250),new Enemy(350,250),new Enemy(400,250),new Enemy(450,250)];

var level_3_enemies = [new Enemy(300,300),new Enemy(300,350),new Enemy(100,100),new Enemy(500,100),new Enemy(100,300)];

var sm_enemies = [new Enemy(0,150),new Enemy(50,100),new Enemy(100,100),new Enemy(0,300),new Enemy(100,200),
  new Enemy(550,300),new Enemy(550,350),new Enemy(400,150),new Enemy(400,250),new Enemy(500,300),new Enemy(450,200), new Enemy(450,300)];

function level1Enemies(){
  for (i = 0; i < level_1_enemies.length; i++) {
    level_1_enemies[i].createEnemy()
  }
}

function level2Enemies(){
  for (i = 0; i < level_2_enemies.length; i++) {
    level_2_enemies[i].createEnemy()
  }
}

function level3Enemies(){
  for (i = 0; i < level_3_enemies.length; i++) {
    level_3_enemies[i].createEnemy()
  }
}

function smEnemies(){
  for (i = 0; i < sm_enemies.length; i++) {
    sm_enemies[i].createEnemy()
  }
}

function bulletHit(){
  var enemies = document.getElementsByClassName('enemy')
  for (i = 0; i < enemies.length; i++) {
    let hor = enemies[i].style.left.slice(0, -2);
    x = parseInt(hor);
    let ver = enemies[i].style.top.slice(0, -2);
    y = parseInt(ver);
    for (a = 0; a < 50; a++){
      for (b = 0; b < 50; b++){
        if(!checkFree(x + a , y + b,getItem('bullet'))){
          enemies[i].remove();
          score += 20
          document.getElementById("scoreDisplay").innerHTML = "Score: " + String(score);
          var bullets = getItem('bullet');
          for (c = 0; c < bullets.length; c++){
            bullets[c].remove();
          }
        }
      }
    }
}
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
  randomMovement(enemies);
  causeDamage();
}

function causeDamage(){
  let enemies=document.getElementsByClassName('enemy');
  for (i = 0; i < enemies.length; i++) {
    let hor = enemies[i].style.left.slice(0, -2);
    x = parseInt(hor);
    let ver = enemies[i].style.top.slice(0, -2);
    y = parseInt(ver);
    if (!checkFree(x, y, getGuy())) {
      playerInventory.heartInventory.pop();
      playerInventory.updateDisplay()
      playAudio("grunt")
      score -= 5
      document.getElementById("scoreDisplay").innerHTML = "Score: " + String(score);
      playerInventory.checkLife();
    }
  }
}
