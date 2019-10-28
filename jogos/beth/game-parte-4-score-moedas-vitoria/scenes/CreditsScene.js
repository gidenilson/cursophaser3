import Botao from '../classes/Botao.js'
class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }


  create() {
    const width = this.cameras.main.width
    const height = this.cameras.main.height

    this.add.image(width / 2, height / 2 - 50, 'credits').setOrigin(0.5)

    //botão menu
    this.btnMenu = new Botao(this, width / 2, height / 2 + 200, '[menu]')
    this.btnMenu.target = 'Menu'
  }
}

export default CreditsScene