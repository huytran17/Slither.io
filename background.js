class Background {
  constructor(game) {
    this.game = game;
    this.firstLineX = 0;
    this.firstLineY = 0;
  }

  draw() {
    this.game.ctx.lineWidth = 1;
    this.game.ctx.strokeStyle = "#000000";

    //Vẽ các cột dọc
    while (this.firstLineX <= SCREEN_WIDTH) {
      this.game.drawable.drawLine(
        { x: this.firstLineX, y: 0 },
        { x: this.firstLineX, y: SCREEN_HEIGHT }
      );
      this.firstLineX += GRID_SIZE;
    }

    //Vẽ các cột ngang
    while (this.firstLineY <= SCREEN_HEIGHT) {
      this.game.drawable.drawLine(
        { x: 0, y: this.firstLineY },
        { x: SCREEN_WIDTH, y: this.firstLineY }
      );
      this.firstLineY += GRID_SIZE;
    }
  }
}
