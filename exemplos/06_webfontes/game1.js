var config = {
  type: Phaser.AUTO,
  scene: {
    create
  },
  backgroundColor: 0xbdbdbd
}
var game = new Phaser.Game(config);
function create() {
  this.counter = 0
  this.texto = this.add.text(400, 300, 'Fonte Mansalva', {
    fontSize: 40,
    fontFamily: "Mansalva"
  })
  this.texto.setStroke('#aa0000', 4)
  this.texto.setShadow(2, 2, "#333333", 2, true, true)
  this.texto.setOrigin(0.5)
}