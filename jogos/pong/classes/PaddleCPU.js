class PaddleCPU extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprPaddle")
    this.setOrigin(0.5);
    this.body.setImmovable(true)
  }
  update() {
    this.body.setVelocity(0, 0)
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height)
  }
}