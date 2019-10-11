var config = {
  type: Phaser.CANVAS,
  parent: 'phaser-example',
  width: 400,
  height: 400,
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.atlas('creatures', 'creatures.png', 'creatures.json');

}

function create() {

  // Neste textureAtlas o peixe stingray usa frames com o nome stingray0000 até stingray0023
  // o parâmetro zeropad é a quantidade de zero máximo que aparece na numeração dos nomes.


  this.anims.create({
    key: 'stingray',
    frames: this.anims.generateFrameNames('creatures', {
      prefix: 'stingray',
      end: 23,
      zeroPad: 4
    }),
    repeat: -1
  });

  var ray = this.add.sprite(200, 200, 'creatures').play('stingray');

}
