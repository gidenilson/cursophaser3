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
var game = new Phaser.Game(config);

function preload() {
  this.load.image('spark', 'blue.png')
}

function create() {
  this.particles = this.add.particles('spark')
  this.emitter = this.particles.createEmitter()

  this.emitter.setPosition(200, 200);
  this.emitter.setSpeed(200);
  this.emitter.setBlendMode(Phaser.BlendModes.ADD);
}