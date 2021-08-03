class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.score = 0;
    this.snake = new Snake(this);
    this.bg = new Background(this);
    this.drawable = new Drawable(this);
    this.screen = new Screen(this);
    this.food = new Food(this);

    this.init();
    this.loop();
  }

  getMousePos(evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  init() {
    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;
  }

  loop() {
    this.update();
    this.draw();
    setTimeout(() => this.loop(), 20);
  }

  draw() {
    //this.bg.draw();
    this.food.draw();
    this.snake.draw();
  }

  update() {
    this.canvas.style.background = GAME_BG;
    this.ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    this.food.update();
    this.snake.update();
    this.screen.update();
  }
}

var game = new Game();
