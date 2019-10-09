import Botao from './Botao.js'
class EstadoVitoria {
  constructor(scene, next) {
    this.scene = scene
    this.next = next
    this.width = this.scene.cameras.main.width
    this.height = this.scene.cameras.main.height
  }
  executa(acao) {
    if (acao === 'vitoria') {
      this.scene.sys.game.model.state = 'vitoria'
      this.btnReiniciar = new Botao(this.scene, this.width / 2, this.height / 2 + 50, '[continuar]')
      this.btnReiniciar.target = 'Game'
      this.btnReiniciar.setScrollFactor(0)
      this.btnReiniciar.depth = 100
      this.txtVitoria = this.scene.make.text({
        x: this.width / 2,
        y: this.height / 2 - 50,
        text: 'VITÓRIA !!!',
        style: {
          font: '30px PressStart2P',
          color: '#ecd36f',
          stroke: '#7c3e20',
          strokeThickness: 8
        }
      })
      this.txtVitoria.setOrigin(0.5)
      this.txtVitoria.setScrollFactor(0)
      this.txtVitoria.depth = 100

    } else if (this.next) {
      this.next.executa(acao)
    }

  }
}

export default EstadoVitoria