class Player {
  constructor(col = 0, row = 0) {
    this.col = col * SQUARE_SIDE;
    this.row = row * SQUARE_SIDE;
  }
  drawPlayer() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
  moveUp() {
    if (this.row > 0) {
      this.row -= SQUARE_SIDE;
      this.image = playerImgUp;
    }
  }
  moveDown() {
    if (this.row < WIDTH - SQUARE_SIDE) {
      this.row += SQUARE_SIDE;
      this.image = playerImgDown;
    }
  }
  moveLeft() {
    if (this.col > 0) {
      this.col -= SQUARE_SIDE;
      this.image = playerImgLeft;
    }
  }
  moveRight() {
    if (this.col < WIDTH - SQUARE_SIDE) {
      this.col += SQUARE_SIDE;
      this.image = playerImgRight;
    }
  }
}
