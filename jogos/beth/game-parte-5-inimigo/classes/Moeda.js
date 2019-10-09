class Moeda extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture)
    this.scene = scene

    this.scene.add.existing(this)
    this.setScale(1.5)

    this.scene.anims.create({
      key: 'moeda-girando',
      frames: this.scene.anims.generateFrameNumbers('moedas', {
        start: 0,
        end: 7
      }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.play('moeda-girando')

  }
}

export default Moeda