class Death extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene)
    this.scene = scene
    this.scene.add.existing(this)
    this.animsCreate()
    this.setScale(2)

  }
  play(x, y) {
    this.setPosition(x, y)
    this.anims.play('morrendo')
  }
  animsCreate() {
    this.scene.anims.create({
      key: 'morrendo',
      frames: this.scene.anims.generateFrameNumbers('bee', {
        start: 16,
        end: 23
      }),
      frameRate: 20
    })
  }
}