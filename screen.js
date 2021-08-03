class Screen {
  constructor(game) {
    this.game = game;
    this.top = 0;
    this.left = 0;
    this.right = 0;
    this.bottom = 0;
  }

  update() {
    this.top = this.game.snake.y - SCREEN_HEIGHT / 2;
    this.bottom = this.game.snake.y + SCREEN_HEIGHT / 2;
    this.left = this.game.snake.x - SCREEN_WIDTH / 2;
    this.right = this.game.snake.x + SCREEN_WIDTH / 2;
  }

  drawCircle(x, y, radius) {
    this.game.drawable.drawCircle(
      x - this.left,
      y - this.top,
      radius,
      0,
      Math.PI * 2
    );
  }
}
