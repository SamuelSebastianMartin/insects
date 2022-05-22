
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 14;
const enemiesArray = []

let gameFrame = 0;

class Enemy{
  constructor(){
    this.image = new Image();
    this.image.src = 'img/mosquito_sprite_6_frame.png';
    this.speed = Math.random() * 4 - 2; // -2 < x < 2
    this.spriteWidth = 263;
    this.spriteHeight = 185;
    this.width = this.spriteWidth / 1.5;
    this.height = this.spriteHeight / 1.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0; // for cycling through sprite sheet
    this.flapSpeed = Math.floor(Math.random() * 2 + 1); //;make wings not sync: low=faster
  }
  update(){
    this.x += Math.random() * 3 - 1.5;
    this.y += Math.random() * 5 - 2.5; //looks better if y movement is bigger
    // animate sprites
    if (gameFrame % this.flapSpeed === 0){
      this.frame > 4 ? this.frame = 0: this.frame++; // ternary operator!
    }

  }
  draw(){
    ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
};

for (let i = 0; i < numberOfEnemies; i++){
  enemiesArray.push(new Enemy());
}

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach(enemy => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
