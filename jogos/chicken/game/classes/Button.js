export default class Button extends Phaser.GameObjects.Image {
  constructor(scene, x, y, atlas, texture) {
    super(scene, x, y, atlas, texture)
    this._target = ""
    scene.add.existing(this)
    this.setInteractive({
        useHandCursor: true
      })
      .on('pointerdown', () => {
        this.setScale(0.9)
      })
      .on('pointerup', () => {
        this.setScale(1)
        scene.scene.start(this._target)
      })
  }
  set target(target) {
    this._target = target
  }

}