import Button from './Button.js'
export default class GameOver {
  constructor(scene) {
    this.scene = scene
    this.gameOver()
    this.score()
    this.ovos()
    this.botoes()
  }
  gameOver() {
    let texto = this.scene.make.text({
      style: {
        font: '40px PressStart2P',
        color: '#FE7F07',
        stroke: '#2F643C',
        strokeThickness: 8
      }
    })
    texto.setOrigin(0.5)
    texto.setPosition(400, 150)
    texto.setDepth(300)
    texto.setText('GameOver')
  }
  score() {
    let texto = this.scene.make.text({
      style: {
        font: '30px PressStart2P',
        color: '#FE7F07',
        stroke: '#2F643C',
        strokeThickness: 8
      }
    })
    texto.setOrigin(0.5)
    texto.setPosition(400, 200)
    texto.setDepth(300)
    texto.setText(`score:${this.scene.sys.game.model.score}`)
  }
  ovos() {
    let texto = this.scene.make.text({
      style: {
        font: '30px PressStart2P',
        color: '#FE7F07',
        stroke: '#2F643C',
        strokeThickness: 8
      }
    })
    texto.setOrigin(0.5)
    texto.setPosition(400, 250)
    texto.setDepth(300)
    texto.setText(`ovos:${this.scene.sys.game.model.total}`)
  }
  botoes() {
    //botão reiniciar
    this.btnIniciar = new Button(this.scene, 400, 350,
      'botoes', 'start')
    this.btnIniciar.target = 'Game'
    this.btnIniciar.setDepth(300)

    //botão menu
    this.btnMenu = new Button(this.scene, 400, 400,
      'botoes', 'menu')
    this.btnMenu.target = 'Menu'
    this.btnMenu.setDepth(300)

  }
}