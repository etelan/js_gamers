
var seconds = 0;
var interval ;
function timer(mins) {
   const timerprogress = document.getElementById('timer');
   seconds = mins*60 || 0;
   interval = setInterval(function() {

        seconds--;
        if(!seconds){
             clearInterval(interval);
               window.location.replace("/death");
        }
      var progress = seconds / 60 * 100;
      timerprogress.style.width = progress + "%";
   },1000)
}


timer(1);
