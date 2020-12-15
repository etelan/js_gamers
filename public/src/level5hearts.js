class Heart {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.id = this.createId();
  }

  createId() { 
    return Math.random().toString(36).substr(2, 9); 
  };

  createHeart() {
    var heart = document.createElement('div');
    heart.id = this.id;
    heart.className = 'heart';
    heart.style.left = this.x + "px";
    heart.style.top = this.y + "px";
    document.getElementById("container").appendChild(heart);
  }
}

var level_5_hearts = [new Heart(300,0),new Heart(250,150),new Heart(550,200),
new Heart(0,350)];

for (i = 0; i < level_5_hearts.length; i++) {
  level_5_hearts[i].createHeart()
}
