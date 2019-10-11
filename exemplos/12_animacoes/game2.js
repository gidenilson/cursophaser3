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

  this.anims.create({
    key: 'voando',
    frames: this.anims.generateFrameNumbers('bee', {
      start: 0,
      end: 7
    }),
    frameRate: 40,
    repeat: -1
  })
  this.bee.anims.play('voando')
}
