class Ball extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprBall")
    this.setOrigin(0.5)
    this.body.setBounce(1)
    this.setData("speed", 500)
    this.body.setVelocity(this.getData("speed"), 0)
  }
  update() {
    if (this.y < this.displayHeight * 0.5 ||
      this.y > this.scene.game.config.height - (this.displayHeight * 0.5)) {
      this.body.velocity.y = -this.body.velocity.y
    }
  }
}