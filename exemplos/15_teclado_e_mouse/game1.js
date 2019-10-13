var config = {
  type: Phaser.AUTO,
  scene: {
    create: create
  }
}
var game = new Phaser.Game(config)

function create() {
  this.input.keyboard.on('keydown', function(event) {
    console.dir(event.key)
  })
}