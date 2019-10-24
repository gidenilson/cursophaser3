var config = {
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)

function preload() {
  // carrega o JSON
  this.load.tilemapTiledJSON('map', 'autodromo.json')
  // carrega o tileset
  this.load.image('tiles', 'tiles-rua-02.png')
  //carrega spritesheet das moedas (coins)
  this.load.spritesheet('moedas', 'moedas.png', {
    frameWidth: 16,
    frameHeight: 16
  })
}

function create() {
  // cria o tilemap
  var map = this.make.tilemap({
    key: 'map'
  })
  // cria animação da moeda girando
  this.anims.create({
    key: 'moeda-girando',
    frames: this.anims.generateFrameNumbers('moedas', {
      start: 0,
      end: 7
    }),
    frameRate: 10,
    repeat: -1
  })
  // cria o tileset onde o primeiro parâmetro é o nome do
  // mapa definido no Tiled.
  var tileset = map.addTilesetImage('tiles-rua-02', 'tiles')
  // cria o layer do terreno
  var terreno = map.createStaticLayer('terreno', tileset, 0, 0)
  // cria o layer do arbusto
  var arbusto = map.createStaticLayer('arbusto', tileset, 0, 0)
  // cria o layer da pista
  var pista = map.createStaticLayer('pista', tileset, 0, 0)
  /* cria moedas nos pontos da camada 'joia' */
  // pega array de objetos da camada 'joia'
  var objetos = map.getObjectLayer('joia').objects
  // laço para pegar todos os objetos do array
  for (let i = 0; i < objetos.length; i++) {
    // cria sprite 'moeda' com a posição do objeto
    // os valores de x e y estão divididos por 2 para reduzir a escala
    // conforme estamos fazendo com as camadas
    let moeda = this.add.sprite(objetos[i].x / 2, objetos[i].y / 2, 'moedas')
    // roda animação na moeda
    moeda.anims.play('moeda-girando')
  }
  // reduz escala dos layers para o tamanho da tela
  terreno.setScale(0.5)
  arbusto.setScale(0.5)
  pista.setScale(0.5)
}