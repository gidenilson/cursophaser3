var config = {
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}
var game = new Phaser.Game(config)

function preload() {
  this.load.image('ball', 'ball.png')
}

function create() {
  this.bola = this.physics.add.image(100, 100, 'ball')
  this.cursors = this.input.keyboard.createCursorKeys()
}

function update() {
  this.bola.setVelocity(0)
  if (this.cursors.left.isDown) {
    this.bola.setVelocityX(-100)
  } else if (this.cursors.right.isDown) {
    this.bola.setVelocityX(100)
  }
  if (this.cursors.up.isDown) {
    this.bola.setVelocityY(-100)
  } else if (this.cursors.down.isDown) {
    this.bola.setVelocityY(100)
  }
}