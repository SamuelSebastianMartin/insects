
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = []

let gameFrame = 0;

class Enemy{
  constructor(){
    this.image = new Image();
    this.image.src = 'img/ladybird_sprite_4pics.png';
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() * 4 - 2; // -2 < x < 2
    this.spriteWidth = 241;
    this.spriteHeight = 127;
    this.width = this.spriteWidth / 1.5;
    this.height = this.spriteHeight / 1.5;
    this.frame = 0; // for cycling through sprite sheet
    this.flapSpeed = Math.floor(Math.random() * 5 + 3); //;make wings not sync
  }
  update(){
    this.x += this.speed;
    this.y += this.speed;
    // animate sprites
    if (gameFrame % this.flapSpeed === 0){
      this.frame > 2 ? this.frame = 0: this.frame++; // ternary operator!
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
