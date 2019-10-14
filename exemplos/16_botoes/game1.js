import ImageButton from './ImageButton.js'

var config = {
  type: Phaser.AUTO,
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)

function preload() {
  this.load.spritesheet('botao', 'botao.png', {
    frameWidth: 80,
    frameHeight: 80
  })
  this.load.spritesheet('btnIniciar', 'botao2.png', {
    frameWidth: 100,
    frameHeight: 34
  })
}

function create() {
  this.botao = new ImageButton(this, 100, 100, 'botao')
  this.botao.on('click', () => console.log('click botão'))

  this.btnIniciar = new ImageButton(this, 100, 200, 'btnIniciar')
  this.btnIniciar.on('click', () => console.log('click botão iniciar'))
}