import GameOver from './GameOver.js'
export default class Acao {
  constructor(scene) {
    this.scene = scene
    this.gui = this.scene.gui
    this.ovos = this.scene.ovos
    this.chicken = this.scene.chicken
  }
  atropelou() {
    this.scene.sys.game.audio.jogo.stop()
    this.scene.sys.game.model.state = 'perdeu'
    this.chicken.reset()
    new GameOver(this.scene)

  }
  pegouOvo() {
    this.scene.sys.game.model.ovos += 1
    this.scene.sys.game.model.total += 1
    this.gui.update()
  }
  pegouTudo() {
    console.log('acao-pegou-tudo')
  }
  chegou() {
    this.scene.sys.game.audio.vitoria.play()
    this.scene.sys.game.model.score +=
      this.scene.sys.game.model.ovos * Phaser.Math.RND.integerInRange(10, 20)
    this.scene.sys.game.model.ovos = 0
    this.ovos.reset()
    this.chicken.reset()
    this.gui.update()
  }
}