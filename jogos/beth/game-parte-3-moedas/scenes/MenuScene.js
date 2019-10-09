import Botao from '../classes/Botao.js'
class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
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
  }
}

export default MenuScene