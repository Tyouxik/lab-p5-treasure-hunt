class Treasure {
  constructor() {
    this.row = 0;
    this.col = 0;
  }

  setRandomPosition() {
    let randomCol = Math.floor(Math.random() * 10);
    let randomRow = Math.floor(Math.random() * 10);
    this.row = randomRow * SQUARE_SIDE;
    this.col = randomCol * SQUARE_SIDE;
  }

  drawTreasure() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}
