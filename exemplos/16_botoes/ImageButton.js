class ImageButton extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture, 0)
    scene.add.existing(this)
    this.setInteractive()
    this.on('pointerover', () => this.setFrame(1))
    this.on('pointerout', () => this.setFrame(0))
    this.on('pointerdown', () => this.setFrame(2))
    this.on('pointerup', () => {
      this.setFrame(0)
      this.emit('click')
    })
  }
}
export default ImageButton