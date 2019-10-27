var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 720,
    height: 1280
  },
  backgroundColor: '#FFF',
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {

  this.load.spritesheet('bee', 'assets/bee.png', {
    frameWidth: 64,
    frameHeight: 64
  });
}

function create() {

  this.gui = new Gui(this)
  this.timer = new Timer(this)
  this.timer.on('endtime', () => gameOver(this))

  this.bee = new Bee(this)
  this.bee.bee.on('hit', () => hit(this))

  this.message = new Message(this)
  gameConfig.state = 'run'

}

function hit(scene) {

  scene.timer.restart()
  scene.bee.reset()
  if (gameConfig.state === 'gameover') {
    scene.gui.reset()
    scene.message.setText('')
    gameConfig.state = 'run'
    return
  }
  scene.gui.ScoreIncrement(Phaser.Math.RND.between(50, 100))
  scene.gui.nextLevel()
}

function gameOver(scene) {
  gameConfig.state = 'gameover'
  scene.bee.stop()
  scene.timer.stop()
  scene.message.setText('Game Over\n\nclick on bee to restart')

}