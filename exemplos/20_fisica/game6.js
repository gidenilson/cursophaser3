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
  // cria bola
  this.bola = this.physics.add.image(100, 100, 'ball')
  // habilita colisão da bola com o mundo
  this.bola.setCollideWorldBounds()
  // cria grupo de física passando um objeto de configuração.
  this.group = this.physics.add.group({
    bounceX: 1,
    bounceY: 1,
    collideWorldBounds: true
  })
  // cria 6 caixas e adiciona ao grupo de física.
  for (let i = 1; i < 7; i++) {
    let block = this.add.image(i * 150, 250, 'block')
    this.group.add(block)
  }
  // habilita colisão entre a bola e o grupo.
  this.physics.add.collider(this.bola, this.group, (a, b) => console.log(`${a} colisão com ${b}`))
  // habilita colisão do grupo com ele mesmo
  this.physics.add.collider(this.group, this.group, (a, b) => console.log(`${a} colisão com ${b}`))
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