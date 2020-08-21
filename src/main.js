const game = new Game();
let playerImg;
function preload() {
  playerImgDown = loadImage("../assets/character-down.png");
  playerImgUp = loadImage("../assets/character-up.png");
  playerImgLeft = loadImage("../assets/character-left.png");
  playerImgRight = loadImage("../assets/character-right.png");
  treasureImg = loadImage("../assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setupGame();
}

function draw() {
  clear();
  game.drawGame();
}
// Moves Player1
function keyPressed() {
  if (keyCode === 38) {
    game.player1.moveUp();
  }
  if (keyCode === 40) {
    game.player1.moveDown();
  }
  if (keyCode === 37) {
    game.player1.moveLeft();
  }
  if (keyCode === 39) {
    game.player1.moveRight();
  }

  // Moves Player
  if (keyCode === 87) {
    game.player.moveUp();
  }
  if (keyCode === 83) {
    game.player.moveDown();
  }
  if (keyCode === 65) {
    game.player.moveLeft();
  }
  if (keyCode === 68) {
    game.player.moveRight();
  }
}
