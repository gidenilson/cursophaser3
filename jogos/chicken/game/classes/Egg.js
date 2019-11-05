export default class Egg extends Phaser.GameObjects.Image {
  constructor(scene, ovo) {
    super(scene, ovo.x / 2, ovo.y / 2, 'ovo')
    this.scene.physics.world.enableBody(this, 0)
    this.scene.add.existing(this)
  }
}