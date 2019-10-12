var config = {
  type: Phaser.WEBGL,
  width: 400,
  height: 400,
  backgroundColor: '#000',
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)

function preload() {
  this.load.image('gude', 'gude.png')
}

function create() {
  this.particles = this.add.particles('gude')

  this.particles.createEmitter({
    x: 200,
    y: 200,
    lifespan: 2000,
    frequency: 300,
    speed: {
      min: 100,
      max: 100
    },
    angle: 330,
    gravityY: 50,
    scale: {
      start: 1,
      end: 0.2
    }
  })
}