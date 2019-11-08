class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {

    // Instancia a Gui.
    this.gui = new Gui(this)
    // Instancia o Timer.
    this.timer = new Timer(this)
    // Escuta o evento 'endtime' para executar o
    // método this.gameOver.
    this.timer.on('endtime', () => this.gameOver(this))

    // Instancia o sprite da abelha.
    this.bee = new Bee(this)
    // Instancia o sprite da morte.
    this.death = new Death(this)

    // Escuta o evento 'hit' para executar
    // o método this.hit.
    this.bee.bee.on('hit', () => this.hit(this))

    // Instancia o objeto de mensagem.
    this.message = new Message(this)
    gameConfig.state = 'run'

    // Instancia o objeto GameSounds.
    this.sounds = new GameSounds(this)
    // Toca os sons.
    this.sounds.play()
  }

  // Este método trata o toque sobre a abelha.
  hit(scene) {
    // Posiciona a morte na mesma
    // posição da abelha.
    this.death.play(this.bee.getPosition().x,
      this.bee.getPosition().y)
    // Toca o som da morte.
    this.sounds.splash()
    // Reinicia o timer.
    scene.timer.restart()
    // Reinicia a abelha.
    scene.bee.reset()
    // Reinicia a música e o som da abelha.
    this.sounds.resume()

    // Se o jogo já acabou reinicia jogo
    if (gameConfig.state === 'gameover') {
      gameConfig.level = 1
      gameConfig.score = 0
      gameConfig.state = 'run'
      scene.gui.reset()
      scene.message.setText('')
      return
    }

    // Incrementa score em um valor entre 50 e 100
    scene.gui.ScoreIncrement(Phaser.Math.RND.between(50, 100))
    // Incrementa o level.
    scene.gui.nextLevel()
  }

  // Método executado quando o tempo acaba.
  gameOver(scene) {
    gameConfig.state = 'gameover'
    scene.bee.stop()
    scene.timer.stop()
    scene.message.setText('Game Over\n\nclick on bee to restart')
    this.sounds.pause()
  }
}