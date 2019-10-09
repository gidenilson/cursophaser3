var config = {
  type: Phaser.AUTO,
  scene: {
    preload,
    create
  },
  backgroundColor: 0x000
}
var game = new Phaser.Game(config)
function preload(){
  this.load.bitmapFont('fonte', 'font.png', 'font.fnt');
}
function create() {
  this.counter = 0;
  this.texto = this.add.bitmapText(100, 100, 'fonte', 'Minha Fonte', 32)
}