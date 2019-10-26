var config = {
  width: 800,
  height: 600,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      // desabilita debug da física
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}
var game = new Phaser.Game(config)

function preload() {
  // carrega o JSON
  this.load.tilemapTiledJSON('map', 'autodromo.json')
  // carrega o tileset
  this.load.image('tiles', 'tiles-rua-02.png')
  // carrega o carro
  this.load.image('carro', 'circle.png')
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
  // cria o carro com imagem pois não precisamos de animação
  this.carro = this.physics.add.image(150, 150, 'carro')
  // habilita tiles de colisão do terreno
  terreno.setCollisionByProperty({
    colisao: true
  })
  // habilita colisão entre o carro e o terreno
  this.physics.add.collider(this.carro, terreno)
  //câmera segue o carro
  this.camera = this.cameras.main
  this.camera.startFollow(this.carro)
  this.camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
  // cria o cursos para detectar as setas do teclado
  this.cursors = this.input.keyboard.createCursorKeys()
}

function update() {
  // as próximas linhas definem a velocidade do carro
  // com base nas setas pressionadas no teclado
  this.carro.setVelocity(0)
  if (this.cursors.left.isDown) {
    this.carro.setVelocityX(-200)
  } else if (this.cursors.right.isDown) {
    this.carro.setVelocityX(200)
  }
  if (this.cursors.up.isDown) {
    this.carro.setVelocityY(-200)
  } else if (this.cursors.down.isDown) {
    this.carro.setVelocityY(200)
  }
}