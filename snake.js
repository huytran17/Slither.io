class Snake {
  constructor(game) {
    this.game = game;
    this.x = GAME_WIDTH / 2;
    this.y = GAME_HEIGHT / 2;
    this.angle = 0;
    this.tails = [];
    this.isTouched = false;
    this.createTail();
    this.onMouseMove();
  }

  createTail() {
    for (let i = 0; i < 10; i++) {
      this.tails.push({
        x: this.x - i * SNAKE_SPEED,
        y: this.y,
      });
    }
  }

  draw() {
    this.game.ctx.strokeStyle = "transparent";
    this.game.ctx.fillStyle = SNAKE_COLOR;
    this.tails.forEach((pos) => {
      this.game.screen.drawCircle(pos.x, pos.y, SNAKE_SIZE);
    });
  }

  update() {
    let newTailPos = {
      x: this.x + Math.cos(this.angle) * SNAKE_SPEED,
      y: this.y + Math.sin(this.angle) * SNAKE_SPEED,
    };

    this.tails.unshift(newTailPos);

    this.x = newTailPos.x;
    this.y = newTailPos.y;

    this.game.food.foodPos.some(
      function (food) {
        let touchPointX = 0,
          touchPointY = 0;

        //tính khoảng cách va chạm
        //theo trục x
        if (food.x - this.x < 0) {
          touchPointX = Math.abs(food.x - this.x) - SNAKE_SIZE;
        } else if (food.x - this.x > 0) {
          touchPointX = food.x - this.x - SNAKE_SIZE;
        }
        //theo trục y
        if (food.y - this.y < 0) {
          touchPointY = Math.abs(food.y - this.y) - SNAKE_SIZE;
        } else if (food.y - this.y > 0) {
          touchPointY = food.y - this.y - SNAKE_SIZE;
        }
        //kiểm tra va chạm
        if (touchPointX <= food.size / 2 && touchPointY <= food.size / 2) {
          this.isTouched = true;
          this.game.score += Math.round(food.size);
          this.game.food.foodPos = this.game.food.foodPos.filter((element) => {
            return element.x !== food.x && element.y !== food.y;
          });
        }
      }.bind(this)
    );

    if (!this.isTouched) {
      this.tails.pop();
    } else {
      if (this.game.score >=5 && this.game.score / 5 > 0) {
        this.isTouched = false;
      } else this.tails.pop();
      this.isTouched = false;
    }
  }

  onMouseMove() {
    this.game.canvas.addEventListener("mousemove", (event) => {
      let mousePos = this.game.getMousePos(event);
      this.angle = Math.atan2(
        mousePos.y - SCREEN_HEIGHT / 2,
        mousePos.x - SCREEN_WIDTH / 2
      );
    });
  }
}
