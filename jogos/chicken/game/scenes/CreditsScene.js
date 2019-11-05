import Button from '../classes/Button.js'
export default class CreditsScene extends Phaser.Scene {
  constructor(scene) {
    super('Credits')
  }
  init() {
    this.audio = this.sys.game.audio
  }
  create() {
    // para o som de espera
    this.audio.espera.stop()

    // logotipo
    this.add.image(400, 100, "logo").
    setScale(0.5)

    // texto
    let texto = this.make.text({
      style: {
        font: '20px PressStart2P',
        color: '#FE7F07'
      }
    })
    texto.setOrigin(0.5)
    texto.setPosition(400, 300)
    texto.setText('by Gidenilson A Santiago\n\n  gidenilson@gmail.com')


    //botão Menu
    this.btnIniciar = new Button(this, 400, 500,
      'botoes', 'menu')
    this.btnIniciar.target = 'Menu'
  }
}