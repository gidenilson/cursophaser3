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
  // habilita colisão da bola com o mundo
  this.bola.setCollideWorldBounds()
  // habilita o disparo do evento de colisão da cola com o mundo
  this.bola.body.onWorldBounds = true
  // checa se ouve colisão de algum objeto com o mundo
  this.physics.world.on('worldbounds', (body) => console.log(body))
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