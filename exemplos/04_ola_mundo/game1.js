var config = {
  type: Phaser.AUTO,
  scene: {
    create: create
  }
}
var game = new Phaser.Game(config)
function create() {
  this.add.text(400, 300, 'Olá, mundo!')
}