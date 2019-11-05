import Button from '../classes/Button.js'
import Audio from '../classes/Audio.js'
class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  init() {
    this.sys.game.audio = new Audio(this)
    this.audio = this.sys.game.audio
  }
  create() {

    // para música do jogo e toca música de espera
    this.audio.jogo.stop()
    this.audio.espera.play('', {
      volume: 0.3,
      loop: true
    })

    // pega dimensões da tela
    const width = this.cameras.main.width
    const height = this.cameras.main.height

    //botão iniciar
    this.btnIniciar = new Button(this, width / 2, height / 2 - 50,
      'botoes', 'start')
    this.btnIniciar.target = 'Game'

    //botão créditos
    this.btnIniciar = new Button(this, width / 2, height / 2 + 50,
      'botoes', 'credits')
    this.btnIniciar.target = 'Credits'
  }
}

export default MenuScene