var config = {
  type: Phaser.AUTO,
  scene: {
    create: create,
    update: update
  }
}
var game = new Phaser.Game(config)

function create() {
  keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
}

function update() {
  if (keyA.isDown) {
    console.log('A')
  }
}