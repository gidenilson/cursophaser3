class PaddlePlayer extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprPaddle")
    this.setOrigin(0.5)
    this.body.setImmovable(true)
    this.setData("speed", 500)
  }
  moveUp() {
    his.body.setVelocityY(-this.getData("speed"))
  }
  moveDown() {
    this.body.setVelocityY(this.getData("speed"))
  }
  update() {
    this.body.setVelocity(0, 0)
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height)
  }
}