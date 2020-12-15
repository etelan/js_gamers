class Key {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.id = this.createId();
  }
  createId() { 
    return Math.random().toString(36).substr(2, 9); 
  };

  createKey() {
    var key = document.createElement('div');
    key.id = this.id;
    key.className = 'key';
    key.style.left = this.x + "px";
    key.style.top = this.y + "px";
    document.getElementById("container").appendChild(key);
  }
}

var level_2_keys = [new Key(0,350),new Key(300,100) ,new Key(550,100)];
var level_4_keys = [new Key(50,350), new Key(300,350)]

function level2keys(){
  for (i = 0; i < level_2_keys.length; i++) {
    level_2_keys[i].createKey()
  }
}

function level4keys(){
  for (i = 0; i < level_4_keys.length; i++) {
    level_4_keys[i].createKey()
  }
}
