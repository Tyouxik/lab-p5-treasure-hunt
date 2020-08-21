class Game {
  constructor() {
    this.gridX = 0;
    this.gridY = 0;
  }
  setupGame() {
    this.player = new Player();
    this.player.image = playerImgDown;
    this.player1 = new Player(9, 9);
    this.player1.image = playerImgDown;
    console.log("This is player", this.player);
    console.log("This is player1", this.player1);
    this.treasure = new Treasure();
    this.treasure.setRandomPosition();
    this.treasure.image = treasureImg;
  }

  drawGrid() {
    // Iteration 1
    // Draw vertical lines, only x changes.
    for (let i = 0; i <= 10; i++) {
      line(i * SQUARE_SIDE, 0, i * SQUARE_SIDE, HEIGHT);
      line(0, i * SQUARE_SIDE, WIDTH, i * SQUARE_SIDE);
    }

    // Draw horizontal lines, only y changes
  }

  drawGame() {
    this.player.drawPlayer();
    this.player1.drawPlayer();
    this.treasure.drawTreasure();
    this.drawGrid();
  }
}
