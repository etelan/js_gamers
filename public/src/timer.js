
var seconds = 0;
var interval ;
function timer(mins, display) {
   const timerprogress = document.getElementById('timer');
   seconds = mins*10 || 0;
   interval = setInterval(function() {

        seconds--;

        display.textContent = seconds;
        if(!seconds){
             clearInterval(interval);
               window.location.replace("/death");
        }
      var progress = seconds / 60 * 100;
      timerprogress.style.width = progress + "%";
   },1000)
}

window.onload = function() {
  display = document.querySelector('#timer');
  timer(6, display);
}
//
// timer(6);
