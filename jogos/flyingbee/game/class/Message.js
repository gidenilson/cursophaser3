class Message extends Phaser.GameObjects.Text {
  constructor(scene) {
    super(scene, 360, 640, '', {
      fontSize: 60,
      fontFamily: "BigShoulders",
      color: "#f0ce00",
      align: 'center'
    })
    this.setStroke('#000', 2)
    this.setOrigin(0.5)
    this.scene.add.existing(this)
  }
}