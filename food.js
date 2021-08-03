class Food {
  constructor(game) {
    this.game = game;
    this.foodX = 0;
    this.foodY = 0;
    this.foodSize = 0;
    this.foodPos = [];
    this.color = null;
    this.getFoodCoord(FOOD_AMOUNT);
  }

  getFoodCoord(amount) {
    for (var i = 0; i < amount; i++) {
      this.foodX = Math.random() * GAME_WIDTH;
      this.foodY = Math.random() * GAME_HEIGHT;
      this.foodSize = Math.random() * FOOD_SIZE + FOOD_SIZE / 3;
      this.randomColor();

      this.foodPos.push({
        index: i,
        x: this.foodX,
        y: this.foodY,
        size: this.foodSize,
        color: this.color,
      });
    }
  }
  randomColor() {
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  draw() {
    this.game.ctx.strokeStyle = "transparent";
    this.foodPos.forEach((pos) => {
      this.game.ctx.fillStyle = pos.color;
      this.game.screen.drawCircle(pos.x, pos.y, pos.size);
    });
  }

  update() {
    if (this.foodPos.length <= FOOD_AMOUNT - 10) {
      this.getFoodCoord(FOOD_AMOUNT / 10);
    }
  }
}
