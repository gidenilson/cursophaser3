var config = {
  scene: {
    create: create
  }
}
var game = new Phaser.Game(config)

function create() {
  this.y = 0
  this.texto = this.add.text(10, 10, '0', {
    font: '28px Courier',
    fill: '#00ff00'
  })

  this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) => {

    this.texto.setText(this.y += deltaY / 100)
  })
}