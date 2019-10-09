import Botao from '../classes/Botao.js'
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
    // pega dimensões da tela
    const width = this.cameras.main.width
    const height = this.cameras.main.height

    //botão iniciar
    this.btnIniciar = new Botao(this, width / 2, height / 2 - 50, '[iniciar]')
    this.btnIniciar.target = 'Game'

    //botão créditos
    this.btnCreditos = new Botao(this, width / 2, height / 2 + 50, '[créditos]')
    this.btnCreditos.target = 'Credits'

    //Toca trilha de espera
    this.audio.espera.play('', {
      volume: 0.3,
      loop: true
    })
  }
}

export default MenuScene