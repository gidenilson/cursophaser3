class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.gui = new Gui(this)
    this.timer = new Timer(this)
    this.timer.on('endtime', () => this.gameOver(this))

    this.bee = new Bee(this)
    this.death = new Death(this)
    this.bee.bee.on('hit', () => this.hit(this))

    this.message = new Message(this)
    gameConfig.state = 'run'

    this.sounds = new GameSounds(this)
    this.sounds.play()
  }

  hit(scene) {
    this.death.play(this.bee.getPosition().x, this.bee.getPosition().y)
    this.sounds.splash()
    scene.timer.restart()
    scene.bee.reset()
    this.sounds.resume()
    if (gameConfig.state === 'gameover') {
      gameConfig.level = 1
      gameConfig.score = 0
      gameConfig.state = 'run'
      scene.gui.reset()
      scene.message.setText('')
      return
    }

    scene.gui.ScoreIncrement(Phaser.Math.RND.between(50, 100))
    scene.gui.nextLevel()
  }

  gameOver(scene) {
    gameConfig.state = 'gameover'
    scene.bee.stop()
    scene.timer.stop()
    scene.message.setText('Game Over\n\nclick on bee to restart')
    this.sounds.pause()
  }
}