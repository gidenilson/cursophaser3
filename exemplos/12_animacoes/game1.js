var config = {
  type: Phaser.AUTO,
  width: 300,
  height: 300,
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet('bee', 'bee.png', {
    frameWidth: 64,
    frameHeight: 64
  })
}

function create() {
  this.bee = this.add.sprite(100, 100, 'bee', 0)
  this.frames = this.anims.generateFrameNumbers('bee', {
    start: 0,
    end: 7
  })
  this.config = {
    key: 'voando',
    frames: this.frames,
    frameRate: 40,
    repeat: -1
  }
  this.anims.create(this.config)
  this.bee.anims.play('voando')
}
