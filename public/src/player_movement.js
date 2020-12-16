
// Set 0,0
var guyHorizontal = 0;
var guyVertical = 0;
var hearts = 0;
var score = parseInt(sessionStorage.getItem("Score"));



function anim(e){

    let guy=document.getElementById('guy');
    let container=document.getElementById('container');

    move(e);
    heartCheck();
    keyCheck();
    shoot(e);
    causeDamage();
    playerInventory.selectWeapon(e.keyCode)

    _itemUsable()

    // trumpNoise(e);

    useItem(e, "door")
    useExit(e, "exit")
    // playAudio("backing_track");
}

function _itemUsable() {
  // If there is a door, show E.
  if (searchItem("door")) {
    document.getElementById("canUse").style.color = "red"
    document.getElementById("canUse").innerHTML = "<b>e</b>";

    // Black if useable.
    if (playerInventory.keyInventory.length > 0) {
      document.getElementById("canUse").style.color = "black"

    }


  } else {
    document.getElementById("canUse").innerHTML = "";
  }
}

function useItem(e, item){
  if (e.keyCode == 69) {
    if (searchItem(item)) {
      if (playerInventory.keyInventory.length > 0) {
        var array = getItem(item)
        deleteNearBy(array)
        playerInventory.keyInventory.pop();
        playerInventory.updateDisplay();
      }
    }
  }
}

function searchItem(item) {
  for (x = -50; x < 51; x = x + 50) {

    for (y = -50; y < 51; y = y + 50) {
      var itemNear = !(checkFree(guyHorizontal + x, guyVertical + y, getItem(item)))

      if (itemNear) {
        console.log(item + " Detected.")
        return true
      }

    }

  }
  return false
}

function useExit(e, item){
  if (e.keyCode == 69) {
    if (searchItem(item)) {
      document.getElementById("nextLevel").submit();
    }
  }
}

function heartCheck() {

  // Check for heart
  var hearts = itemCheck("heart", "life_sound");

  // If we meet a heart, delete it and then add heart to inventory.
  if (hearts !== undefined) {
    deleteItem(hearts);
    playerInventory.addItem("heart")
    score += 5
    sessionStorage.setItem("Score",score);
    document.getElementById("scoreDisplay").innerHTML = "Score: " + String(score);
  }
}

function keyCheck() {

  // Check for key
  var keys = itemCheck("key", "life_sound");

  // If we meet a heart, delete it and then add heart to inventory.
  if (keys !== undefined) {
    deleteItem(keys);
    playerInventory.addItem("key")
  }
}

function deleteNearBy(items) {
  // Find specific heart and delete it
  for (i = 0; i < items.length; i++) {
    string1 = items[i].style.left.slice(0, -2)
    x = parseInt(string1)

    string2 = items[i].style.top.slice(0, -2)
    y = parseInt(string2)
    for (a = -50; a < 51; a = a + 50) {

      for (b = -50; b < 51; b = b + 50) {
        if ((guyHorizontal == (x + a)) && (guyVertical == (y + b))){
          removeElement(items[i].id)
        }
      }
    }
  }
}

function deleteItem(items) {
  // Find specific heart and delete it
  for (i = 0; i < items.length; i++) {

    string1 = items[i].style.left.slice(0, -2)
    x = parseInt(string1)

    string2 = items[i].style.top.slice(0, -2)
    y = parseInt(string2)
    if ((guyHorizontal == x) && (guyVertical == y)){
      removeElement(items[i].id)
    }
  }
}

function itemCheck(item, sound){
  if (!checkFree(guyHorizontal, guyVertical, getItem(item))){
    // Play The Sound
    playAudio(sound);

    // Get item
    items = getItem(item);

    return items
  }
}

function playAudio(file) {
  let sound = document.getElementById(file);
  sound.play();
}

function movement2(hor, ver) {
  if ((checkFree(guyHorizontal + hor, guyVertical + ver, getItem('box'))) && (checkFree(guyHorizontal + hor, guyVertical + ver, getItem('door')))
  && (checkFree(guyHorizontal + hor, guyVertical + ver, getItem('exit'))) ){

    // Down
    if ( (guyVertical != 350)&&(ver > 0) ) {
        guyVertical +=ver;
        guy.style.top = guyVertical + 'px';
    }

    // Up
    if ( (guyVertical != 0)&&(ver < 0) ) {
        guyVertical +=ver;
        guy.style.top = guyVertical + 'px';
    }

    // Right
    if ( (guyHorizontal != 550)&&(hor > 0) ) {
        guyHorizontal +=hor;
        guy.style.left = guyHorizontal + 'px';
    }

    // Left
    if ( (guyHorizontal != 0)&&(hor < 0) ) {
        guyHorizontal +=hor;
        guy.style.left = guyHorizontal + 'px';
    }
  }
}

function move(e){
  // Right
  if(e.keyCode == 39){
    document.getElementById("guy_spritesheet").className = "face-right";
    movement2(50,0)
  }
  // Left
  if(e.keyCode == 37){
    document.getElementById("guy_spritesheet").className = "face-left";
    movement2(-50,0)
  }
  // Up
  if(e.keyCode == 38){
    document.getElementById("guy_spritesheet").className = "face-up";
    movement2(0,-50)
  }
  // Down
  if(e.keyCode == 40){
    document.getElementById("guy_spritesheet").className = "down";
    movement2(0,50)
  }
  // Pause
  if(e.keyCode == 27){
    alert("Paused. Hit OK to continue!")
  }
}

function trumpNoise(e) {
  if(e.keyCode == 32){
    playAudio("fake_news")
  }
}

function checkFree(h,v,array){
  //the array of box divs are returned.
    var i;
    var x;
    var y;

    for (i = 0; i < array.length; i++) {
      //cycle through the divs and access their style=left value.
        string = array[i].style.left.slice(0, -2)
        x = parseInt(string)

        //check the left value vs. the player left value. similar to co-ordinates.
        if(h == x){
            string = array[i].style.top.slice(0, -2)
            y = parseInt(string)

            //check the top value vs. the player top value. similar to co-ordinates.
            if(v == y) {
              return false
            }
        }
    }
    return true
  }


//This creates an array of the div elements with class = box.
function getItem(item){
    let items=document.getElementsByClassName(item);
    return items
}

function getGuy(){
    let guy=document.getElementById('guy');
    return [guy]
}

function shoot(e){

  if (playerInventory.weaponSelect == 0) {

    if(e.keyCode == 87){
      bulletSetUp("up")
    }

    if(e.keyCode == 65){
      bulletSetUp("left")
    }

    if(e.keyCode == 83){
      bulletSetUp("down")
    }

    if(e.keyCode == 68){
      bulletSetUp("right")
    }
  } else if ((playerInventory.weaponSelect == 1) // Weapon Selected
              && (document.getElementsByClassName("laser").length == 0) // No other lasers
              && (document.getElementById("weapon1").style.backgroundColor != "rgb(139, 0, 0)")) // Hasn't been fired
  {
    console.log(document.getElementById("weapon1").style.backgroundColor)
    if(e.keyCode == 87){
      laserSetup("up")
    }

    if(e.keyCode == 65){
      laserSetup("left")
    }

    if(e.keyCode == 83){
      laserSetup("down")
    }

    if(e.keyCode == 68){
      laserSetup("right")
    }
  }

}

function laserSetup(direction){

  let laser = new Laser(direction);

  laser.createLaser(guyHorizontal, guyVertical);

  switch (direction) {
    case "down":
      document.getElementById(`${laser.id}`).classList.add("rotateDown");
      break;

    case "left":
      document.getElementById(`${laser.id}`).classList.add("rotateBack");
      break;

    case "up":
      document.getElementById(`${laser.id}`).classList.add("rotateUp");
      break;

    case "right":
      document.getElementById(`${laser.id}`).classList.add("noRotate");
      break;

    default:
      break;
  }

  // Laser
  document.getElementById(`${laser.id}`).style.backgroundImage="url('../images/beams/blue_beam.png')";
  var continuous = setInterval(function(){
    var check = document.getElementById(`${laser.id}`);
    if (check == null) {
      clearInterval(continuous)
    }
    laser.bulletMove(guyHorizontal, guyVertical);
    checkLaser();
    laserHit();
    laserHitBoss();
  }, 35);
}

function bulletSetUp(direction){
  let bullet = new Bullet(direction);
  bullet.createBullet(guyHorizontal, guyVertical);
  document.getElementById(`${bullet.id}`).style.backgroundImage="url('../images/new_bullet_copy.png')";
  var continuous = setInterval(function(){
    var check = document.getElementById(`${bullet.id}`);
    if (check == null) {
      clearInterval(continuous)
    }
    bullet.bulletMove(guyHorizontal, guyVertical);
    checkBullets();
    bulletHit();
    bulletHitBoss();
  }, 35);
}

// var myVar = setInterval(bulletMove, 1000);
//
// var bulletHorizontal = 0;
//
// function bulletMove() {
//   var bullet=document.getElementById('bullet');
//   bulletHorizontal += 50;
//   bullet.style.left = bulletHorizontal + 'px';
//   removeElement();
// }

function removeElement(name) {
  var element=document.getElementById(name);
  element.remove();
}

// document.onkeydown = anim
