var config = {
  type: Phaser.AUTO,
  scene: {
    create: create
  },
  backgroundColor: 0xbdbdbd
}

var game = new Phaser.Game(config);

function create() {
  this.counter = 0
  this.texto = this.add.text(400, 300, 'contagem: 0', {
    fontSize: 40,
    fontFamily: "Arial"

  });
  this.texto.setStroke('#aa0000', 4);
  this.texto.setShadow(2, 2, "#333333", 2, true, true);
  this.texto.setOrigin(0.5);


  this.texto.setInteractive();
  this.texto.on('pointerdown', (pointer) => {
    this.texto.text = `contagem: ${this.counter} family: ${fonts[this.counter]}`;
    this.texto.setFontFamily(fonts[this.counter]);
    this.counter++;
  });
}
var fonts = [
"Arial",
"Helvetica",
"Times New Roman",
"Times",
"Courier New",
"Courier",
"Verdana",
"Georgia",
"Palatino",
"Garamond",
"Bookman",
"Comic Sans MS",
"Trebuchet MS",
"Arial Black",
"Impact",
];