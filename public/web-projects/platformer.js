let player;
let platforms = [];
let gravity = 0.5;

function setup() {
    createCanvas(1000, 500);
    player = new Player();
    generateNewLevel();
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
    // document.getElementById("reset-button").addEventListener("click", setup);
  }
  

function draw() {
  background(200);

  player.update();
  player.show();

  for (let platform of platforms) {
    platform.display();
    if (player.collide(platform)) {
      player.jump();
    }
  }
  text("Score: " + player.score, 10, 20);
}

function keyPressed() {
  if (key === ' ') {
    player.jump();
  }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
      player.xSpeed = 5;
    } else if (keyCode === LEFT_ARROW) {
      player.xSpeed = -5;
    }
    if (key === ' ') {
      player.jump();
    }
  }
  
  function keyReleased() {
    player.xSpeed = 0;
  }

  function generateNewLevel() {
    platforms = [];
    for (let i = 0; i < 20; i++) {
        let x = random(width);
        let y = random(height);
        if (i > 0) {
            while (abs(y - platforms[i - 1].y) < player.jumpHeight) {
                y = y - 5; 
                x = (platforms[i - 1].x + x) / 2
            }
        }
        platforms[i] = new Platform(x, y, random(50, 150), 20);
    }
    
    let highest = min(platforms.map(p => p.y + p.height));
    for (let platform of platforms) {
        if (platform.y + platform.height == highest) {
            platform.isHighest = true;
            break;
        }
    }
 }



class Player {
    constructor() {
      this.x = width/2;
      this.y = height/2;
      this.size = 20;
      this.xSpeed = 0;
      this.ySpeed = 0;
      this.velocity = 0;
      this.jumping = false;
      this.score = 0;
    }  

update() {
    this.velocity += gravity;
    this.x += this.xSpeed;
    this.y += this.velocity;
    if (this.y > height - this.size/2) {
        this.y = height - this.size/2;
        this.jumping = false;
    }
    if (this.x > width - this.size/2){
        this.x = width - this.size/2;
      } else if(this.x < 0 + this.size/2){
        this.x = 0 + this.size/2;
      }
      for (let platform of platforms) {
        if (this.x + this.size/2 > platform.x && this.x - this.size/2 < platform.x + platform.width && this.y + this.size/2 > platform.y && this.y - this.size/2 < platform.y + platform.height) {
            this.y = platform.y - this.size/2;
            this.jumping = false;
            this.velocity = 0;
            if (platform.isHighest) {
                this.score++;
                generateNewLevel();
            }
        }
    }
}
    


  show() {
    fill(255);
    rect(this.x, this.y, this.size, this.size);
  }

  jump() {
    if (!this.jumping) {
      this.velocity = -10;
      this.jumping = true;
    }
  }

  collide(platform) {
    return (this.y + this.size/2 > platform.y &&
            this.y + this.size/2 < platform.y + platform.height &&
            this.x + this.size/2 > platform.x &&
            this.x - this.size/2 < platform.x + platform.width);
  }
}

class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isHighest = false;
    }

    display() {
        if (this.isHighest) {
            fill(0, 100, 100);
        } else {
            fill(100);
        }
        rect(this.x, this.y, this.width, this.height);
    }
}