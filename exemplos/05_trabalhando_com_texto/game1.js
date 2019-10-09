var config = {
  type: Phaser.AUTO,
  scene: {
    create
  }
}
var game = new Phaser.Game(config);

function create() {
  this.texto = this.add.text(400, 300, 'Trabalhando com texto', {
    fontSize: 40,
    fontFamily: "Arial"
  })
  this.texto.setStroke('#aa0000', 4);
  this.texto.setShadow(2, 2, "#333333", 2, true, true);
  this.texto.setOrigin(0.5);
}