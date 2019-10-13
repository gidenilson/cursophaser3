var config = {
  type: Phaser.AUTO,
  scene: {
    create: create,
    update: update
  }
}
var game = new Phaser.Game(config)

function create() {
  cursors = this.input.keyboard.createCursorKeys()
}

function update() {
  if (cursors.left.isDown) {
    console.log('esquerda')
  } else if (cursors.right.isDown) {
    console.log('direita')
  }
  if (cursors.up.isDown) {
    console.log('cima')
  } else if (cursors.down.isDown) {
    console.log('baixo')
  }
}