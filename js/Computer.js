class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.lives = ["green", "green", "green"];

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("white");
    text("Computer", width - 225, 40);
    var x = width - 320;

    for (var i = 0; i < this.lives.length; i++){
      fill(this.lives[i]);
      rect(x, 50, 70, 30);
      x += 70;
    }
    pop();
  }
 

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  removeLife(archerLife){
    if (archerLife == 0){
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setStatic(computerArcher.body, false);
      Matter.Body.setStatic(computerBase.body, false);
      computerArrows = [];
      gameOver = true;
      won = true;
    }
    if (archerLife >= 0){
    this.lives[this.lives.length - archerLife - 1] = "red";
  }
  }
}
