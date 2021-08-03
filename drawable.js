class Drawable {
  constructor(game) {
    this.game = game;
  }

  drawLine(sPos, ePos) {
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(sPos.x, sPos.y);
    this.game.ctx.lineTo(ePos.x, ePos.y);
    this.game.ctx.stroke();
  }

  drawCircle(x, y, radius) {
    this.game.ctx.beginPath();
    this.game.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.game.ctx.stroke();
    this.game.ctx.fill();
  }
}
