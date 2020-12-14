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

function laserHit(){
  // Get enemies
  var enemies = document.getElementsByClassName('enemy')
  var lasers = document.getElementsByClassName('laser')
  
  
  let laser = lasers[0]
  let direction = ""
  console.log(laser)

  // For i in enemies
  for (i = 0; i < enemies.length; i++) {

    // Get Coords
    let hor = enemies[i].style.left.slice(0, -2);
    x = parseInt(hor);
    let ver = enemies[i].style.top.slice(0, -2);
    y = parseInt(ver);

    

    for (a = 0; a < 50; a++){
      for (b = 0; b < 50; b++){

        // ...Check if laser
        if(!checkFree(x + a , y + b,getItem('laser'))){

          // Delete the enemies and increase score
          enemies[i].remove();
          score += 20

          // Update Scoreboard
          document.getElementById("scoreDisplay").innerHTML = "Score: " + String(score);
        }
      }
    }
  }
}

function laserCheck(laser, x, y) {

  let direction = laser.getDirection()



  switch (direction) {
    case "right":
      xdif = x - parseInt(laser.style.left.slice(0, -2));
      return [xdif, 0];
      break;
  
    default:
      break;
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
