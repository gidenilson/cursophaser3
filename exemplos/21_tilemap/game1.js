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
}

function create() {
  // cria o tilemap
  var map = this.make.tilemap({
    key: 'map'
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
  // reduz escala dos layers para o tamanho da tela
  terreno.setScale(0.5)
  arbusto.setScale(0.5)
  pista.setScale(0.5)
}