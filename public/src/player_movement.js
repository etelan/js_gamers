
// Set 0,0
var guyHorizontal = 0;
var guyVertical = 0;

function anim(e){

    let guy=document.getElementById('guy');
    let container=document.getElementById('container');

    move(e);

}

function movement2(hor, ver) {
  if (checkFree(guyHorizontal + hor, guyVertical + ver, getItem('box'))){

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
    movement2(50,0)
  }
  // Left
  if(e.keyCode == 37){
    movement2(-50,0)
  }
  // Up
  if(e.keyCode == 38){
    movement2(0,-50)
  }
  // Down
  if(e.keyCode == 40){
    movement2(0,50)
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


var myVar = setInterval(bulletMove, 1000);

var bulletHorizontal = 0;

function bulletMove() {
var bullet=document.getElementById('bullet');
bulletHorizontal += 50;
bullet.style.left = bulletHorizontal + 'px';
removeElement();
}

function removeElement() {
var bullet=document.getElementById('bullet');
bullet.remove();
}

function playAudio(file) {
  let sound = document.getElementById(file);
  sound.play();
}

document.onkeydown = anim
