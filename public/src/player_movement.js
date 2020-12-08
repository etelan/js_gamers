
// Set 0,0
var guyHorizontal = 0;
var guyVertical = 0;

// Move
function anim(e){

    let guy=document.getElementById('guy');
    let container=document.getElementById('container');

    console.log("test")
    console.log(e.keyCode)

    // Right
    if(e.keyCode == 39){
      if (checkFree(guyHorizontal + 50, guyVertical)){
        if(guyHorizontal != 550){
        guyHorizontal +=50;
        guy.style.left = guyHorizontal + 'px';
        }
      }
    }
    // Left
    if(e.keyCode == 37){
      if (checkFree(guyHorizontal - 50, guyVertical)){
        if(guyHorizontal != 0){
        guyHorizontal -=50;
        guy.style.left = guyHorizontal + 'px';
        }
      }
    }
    // Up
    if(e.keyCode == 38){
      if (checkFree(guyHorizontal, guyVertical - 50)){
        if(guyVertical != 0){
        guyVertical -=50;
        guy.style.top = guyVertical + 'px';
        }
      }
    }
    // Down
    if(e.keyCode == 40){
      if (checkFree(guyHorizontal, guyVertical + 50)){
        if(guyVertical != 350){
        guyVertical +=50;
        guy.style.top = guyVertical + 'px';
        }
      }
    }
}

function checkFree(h,v){
  //the array of box divs are returned.
    boxArray = getBoxes()
    var i;
    var x;
    var y;

    for (i = 0; i < boxArray.length; i++) {
      //cycle through the divs and access their style=left value.
        string = boxArray[i].style.left.slice(0, -2)
        x = parseInt(string)

        //check the left value vs. the player left value. similar to co-ordinates.
        if(h == x){
            string = boxArray[i].style.top.slice(0, -2)
            y = parseInt(string)

            //check the top value vs. the player top value. similar to co-ordinates.
            if(v == y) {
              console.log(h,v)
              console.log('BOX! Watch out!')
              return false
            }
        }
    }
    return true
  }


//This creates an array of the div elements with class = box.
function getBoxes(){
    let boxes=document.getElementsByClassName('box');
    return boxes
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

document.onkeydown = anim

// var vid = document.getElementById("retro");
// vid.autoplay = true;
// vid.load();
