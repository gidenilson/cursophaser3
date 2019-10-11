var config = {
  type: Phaser.AUTO,
  width: 300,
  height: 300,
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config);

function preload() {

  this.load.audio('trilha', ['trilinha_6.mp3', 'trilinha_6.ogg'])
}

function create() {

  this.music = this.sound.play('trilha', { loop: true})
  this.music.play()
  
}