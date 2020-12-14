


class Bullet {
  constructor(direction) {
    this.direction = direction
    this.bulletHorizontal = 0;
    this.bulletVertical = 0;
    this.id = this.createId();
  }
  createId() {
    return Math.random().toString(36).substr(2, 9);
  };

  createBullet(x, y) {
    var bullet = document.createElement('div');
    bullet.id = this.id;
    bullet.className = 'bullet';
    bullet.style.left = x + "px";
    bullet.style.top = y + "px";
    document.getElementById("container").appendChild(bullet);
    return document.getElementById(`${this.id}`);
  }


  bulletMove(x, y) {
    var bullet=document.getElementById(`${this.id}`);
    if (bullet == null) {
      return null;
    }
    if (this.direction == "left"){
      this.bulletHorizontal -= 25;
      bullet.style.left = x + this.bulletHorizontal + 'px';
    }
    if (this.direction == "right"){
      this.bulletHorizontal += 25;
      bullet.style.left = x + this.bulletHorizontal + 'px';
    }
    if (this.direction == "up"){
      this.bulletVertical -= 25;
      bullet.style.top = y + this.bulletVertical + 'px';
    }
    if (this.direction == "down"){
      this.bulletVertical += 25;
      bullet.style.top = y + this.bulletVertical + 'px';
    }
  }
}


class Laser {
  constructor(direction) {
    this.direction = direction;
    this.bulletHorizontal = 0;
    this.bulletVertical = 0;
    this.id = this.createId();
  }
  createId() {
    return Math.random().toString(36).substr(2, 9);
  };

  createLaser(x, y) {
    var bullet = document.createElement('div');
    bullet.id = this.id;
    bullet.className = 'laser';
    bullet.style.left = x + "px";
    bullet.style.top = y + "px";
    document.getElementById("container").appendChild(bullet);
    return document.getElementById(`${this.id}`);
  }


  bulletMove(x, y) {
    var bullet=document.getElementById(`${this.id}`);
    if (bullet == null) {
      return null;
    }
    if (this.direction == "left"){
      this.bulletHorizontal -= 25;
      bullet.style.left = x + this.bulletHorizontal + 'px';
    }
    if (this.direction == "right"){
      this.bulletHorizontal += 25;
      bullet.style.left = x + this.bulletHorizontal + 'px';
    }
    if (this.direction == "up"){
      this.bulletVertical -= 25;
      bullet.style.top = y + this.bulletVertical + 'px';
    }
    if (this.direction == "down"){
      this.bulletVertical += 25;
      bullet.style.top = y + this.bulletVertical + 'px';
    }
  }
}

function checkLaser(){
  var i;
  let bullets = document.getElementsByClassName('laser');
  for (i = 0; i<bullets.length; i++){
    let hor = bullets[i].style.left.slice(0,-2);
    x = parseInt(hor);
    let ver = bullets[i].style.top.slice(0,-2);
    y = parseInt(ver);
    if ((x > 550)||(x < 0)||(y > 350)||(y < 0)){
      bullets[i].remove();
    }
  }
}

function checkBullets(){
  var i;
  let bullets = document.getElementsByClassName('bullet');
  for (i = 0; i<bullets.length; i++){
    let hor = bullets[i].style.left.slice(0,-2);
    x = parseInt(hor);
    let ver = bullets[i].style.top.slice(0,-2);
    y = parseInt(ver);
    if ((x > 550)||(x < 0)||(y > 350)||(y < 0)||(!checkFree(x , y,getItem('box')))||(!checkFree(x , y,getItem('door')))){
      bullets[i].remove();
    }
  }
}
// let x = parseInt(myVar);
