class Botao extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text) {
    super(scene, x, y, text, {
      font: '30px PressStart2P',
      color: '#ecd36f',
      stroke: '#7c3e20',
      strokeThickness: 8
    })
    this.scene = scene
    this._target = ''
    this.setOrigin(0.5)
    scene.add.existing(this)
    this.setInteractive()
    this.on('pointerdown', () => this.setFontSize(28))
    this.on('pointerup', () => scene.scene.start(this._target))
  }
  set target(target) {
    this._target = target
  }
}

export default Botao