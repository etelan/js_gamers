class Boss {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.id = this.createId();
  }
  createId() {
    return Math.random().toString(36).substr(2, 9);
  };

  createBoss() {
    var boss = document.createElement('div');
    const health = document.getElementById('health');
    health.style.width = 1000 + "px";
    boss.className = 'boss';
    boss.id = this.id;
    boss.style.left = this.x + "px";
    boss.style.top = this.y + "px";
    boss.style.backgroundImage = "url('../images/enemy4.gif')";
    document.getElementById("container").appendChild(boss);
  }
}

var boss_level_1 = [new Boss(250,100)];

var repeat_enemies = [new Enemy(250,350),new Enemy(450,100),new Enemy(100,100)]

function Bosslevel1(){
  for (i = 0; i < boss_level_1.length; i++) {
    boss_level_1[i].createBoss()
  }
}

var damage = 0;

function bulletHitBoss(){
  var boss = document.getElementsByClassName('boss')
  const health = document.getElementById('health');
  for (i = 0; i < boss.length; i++) {
    let hor = boss[i].style.left.slice(0, -2);
    x = parseInt(hor);
    let ver = boss[i].style.top.slice(0, -2);
    y = parseInt(ver);

    let horizontalArray = [0, 50, 100, 150, 200, 250]
    let verticleArray = [0, 50, 100, 150, 200, 250]

    horizontalArray.forEach(function (xCheck, index) {
      verticleArray.forEach(function (yCheck, index) {

        // Precisely on boss.
        if(!checkFree(x + xCheck, y + yCheck,getItem('bullet'))){
          damage += 10;
          health.style.width = 1000 - damage + "px";
          if (health.style.width == 0 + "px"){
            boss[i].remove();
            score += 400
          }
          score += 1
          sessionStorage.setItem("Score",score);
          document.getElementById("scoreDisplay").innerHTML = "Score: " + String(score);
          var bullets = getItem('bullet');
          for (c = 0; c < bullets.length; c++){
            bullets[c].remove();
          }
        }

      })
    })
    
    

  }
}

function laserHitBoss(){
  // Get enemies
  var boss = document.getElementsByClassName('boss')
  var lasers = document.getElementsByClassName('laser')


  let laser = lasers[0]
  var direction = ""
  var horLen = 50
  var verLen = 50
  var lowHor = 0
  var highHor = 0
  var lowVert = 0
  var highVert = 0
  var inZone = false

  console.log(document.getElementById(`${laser.id}`).classList)

  if (document.getElementById(`${laser.id}`).classList[1] == "rotateDown") {
    direction = "down";
    horLen = 50;
    verLen = 400;

    // Low Bound Hor
    lowVert = document.getElementById(`${laser.id}`).style.top.slice(0, -2);
    lowVert = parseInt(lowVert);

    // High Bound Ver
    highVert = lowVert + verLen


    // Low Bound Hor
    lowHor = document.getElementById(`${laser.id}`).style.left.slice(0, -2);
    lowHor = parseInt(lowHor);

    // Upper Bound Hor
    highHor = lowHor

  } else if (document.getElementById(`${laser.id}`).classList[1] == "rotateUp") {

    direction = "up";
    horLen = 50;
    verLen = -400;

    // Low Bound Hor
    highVert = document.getElementById(`${laser.id}`).style.top.slice(0, -2);
    highVert = parseInt(highVert);

    // High Bound Ver
    lowVert = highVert + verLen

    // Low Bound Hor
    lowHor = document.getElementById(`${laser.id}`).style.left.slice(0, -2);
    lowHor = parseInt(lowHor);

    // Upper Bound Hor
    highHor = lowHor


  } else if (document.getElementById(`${laser.id}`).classList[1] == "rotateBack") {
    direction = "left";
    horLen = -600 ;
    verLen = 50;

    // Low Bound Hor
    highHor = document.getElementById(`${laser.id}`).style.left.slice(0, -2);
    highHor = parseInt(highHor);

    // High Bound Ver
    lowHor = highHor + horLen


    // Low Bound Ver
    lowVert = document.getElementById(`${laser.id}`).style.top.slice(0, -2);
    lowVert = parseInt(lowVert);

    // Upper Bound Ver
    highVert = lowVert

  } else if (document.getElementById(`${laser.id}`).classList[1] == "noRotate") {
    direction = "right";
    horLen = 600 ;
    verLen = 50;

    // Low Bound Hor
    lowHor = document.getElementById(`${laser.id}`).style.left.slice(0, -2);
    lowHor = parseInt(lowHor);

    // High Bound Ver
    highHor = lowHor + horLen

    // Low Bound Ver
    lowVert = document.getElementById(`${laser.id}`).style.top.slice(0, -2);
    lowVert = parseInt(lowVert);

    // Upper Bound Ver
    highVert = lowVert

  }

  // For i in enemies
  for (i = 0; i < boss.length; i++) {

    // Get Coords
    let hor = boss[i].style.left.slice(0, -2);
    x = parseInt(hor);
    let ver = boss[i].style.top.slice(0, -2);
    y = parseInt(ver);


    if ((x >= lowHor) && (x <= highHor)) {
      console.log("Within X.")

      console.log("LOW V: " + String(lowVert))
      console.log("HIGH V: " + String(highVert))
      console.log(y)
      if ((y >= lowVert) && (y <= highVert)) {
        console.log("Within Y.")

        // Do our enemy shizzle
        boss[i].remove();
        score += 20
        sessionStorage.setItem("Score",score);
        document.getElementById("scoreDisplay").innerHTML = "Score: " + String(score);

      }
    }




    }
  }

var enemyInterval = setInterval(bossMove, 500);

function randomMovementBoss(beings){
  for (i = 0; i < beings.length; i++) {
    let hor = beings[i].style.left.slice(0, -2);
    x = parseInt(hor);
    let ver = beings[i].style.top.slice(0, -2);
    y = parseInt(ver);
    let direction = Math.floor(Math.random() * 4);
    if (direction == 0 ){
      if (checkFree(x + 50, y, getItem('box'))){
        if ( (x + 50 != 350)&&(50 > 0) ) {
          beings[i].style.left = (x + 50) + 'px';
        }
      }
    }
    else if(direction == 1 )  {
      if (checkFree(x - 50, y, getItem('box'))){
        if ( (x - 50 != -50)&&(-50 < 0) ) {
          beings[i].style.left = (x - 50) + 'px';
        }
      }
    }
    else if(direction == 2 )  {
      if (checkFree(x, y - 50, getItem('box'))){
        if ( (y - 50 != -50)&&(-50 < 0) ) {
          beings[i].style.top = (y - 50) + 'px';
        }
      }
    }
    else {
      if (checkFree(x, y + 50, getItem('box'))){
        if ( (y + 50 != 150)&&(50 > 0) ) {
          beings[i].style.top = (y + 50) + 'px';
        }
      }
    }
  }
}



function bossMove() {
  let boss=document.getElementsByClassName('boss');
  randomMovementBoss(boss);
  causeDamageBoss();
}

function causeDamageBoss(){
  let boss=document.getElementsByClassName('boss');
  for (i = 0; i < boss.length; i++) {
    let hor = boss[i].style.left.slice(0, -2);
    x = parseInt(hor);
    let ver = boss[i].style.top.slice(0, -2);
    y = parseInt(ver);
    for (a = 0; a < 300; a++){
      for (b = 0; b < 300; b++){
        if (!checkFree(x + a, y + b, getGuy())) {
          playerInventory.heartInventory.pop();
          sessionStorage.setItem("Hearts",playerInventory.heartInventory.length);
          playerInventory.updateDisplay()
          playAudio("grunt")
          score -= 5
          sessionStorage.setItem("Score",score);
          document.getElementById("scoreDisplay").innerHTML = "Score: " + String(score);
          playerInventory.checkLife();
        }
      }
    }
  }
}
