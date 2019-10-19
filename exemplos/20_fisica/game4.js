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
  this.load.image('block', 'block.png')
}

function create() {
  this.bola = this.physics.add.image(100, 100, 'ball')
  this.bola2 = this.physics.add.image(200, 200, 'ball')
  // habilita colisão da bola com o mundo
  this.bola.setCollideWorldBounds()
  this.bola2.setCollideWorldBounds()
  // habilita o disparo do evento de colisão da cola com o mundo
  this.bola.body.onWorldBounds = true
  this.bola2.body.onWorldBounds = true
  // define que a bola2 vai `recochetear`
  this.bola2.body.setBounce(1, 1)
  // habilita colisão entre as bolas e checa quando colidem
  this.physics.add.collider(this.bola, this.bola2, (a, b) => console.log(`${a} colisão com ${b}`))
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