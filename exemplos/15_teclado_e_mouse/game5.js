var config = {
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)

function preload() {
  this.load.image('rato', 'mouse.png')
}

function create() {
  this.rato = this.add.image(400, 300, 'rato')
  this.rato.setInteractive()
  this.rato.on('pointerover', () => this.rato.setTint(0xff0000))
  this.rato.on('pointerdown', () => this.rato.setTint(0x00ff00))
  this.rato.on('pointerup', () => this.rato.setTint(0x0000ff))
  this.rato.on('pointerout', () => this.rato.clearTint())
}