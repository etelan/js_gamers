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

var level_2_hearts = [new Heart(200,100),new Heart(250,100),new Heart(300,100),
new Heart(350,100),new Heart(400,100),new Heart(450,100),new Heart(200,150),
new Heart(250,150),new Heart(300,150),new Heart(350,150),new Heart(400,150),
new Heart(450,150)];

for (i = 0; i < level_2_hearts.length; i++) {
  level_2_hearts[i].createHeart()
}
