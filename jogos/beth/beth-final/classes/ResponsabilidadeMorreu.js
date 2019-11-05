import Botao from './Botao.js'
class EstadoMorreu {
  constructor(scene, next) {
    this.scene = scene
    this.next = next
    this.width = this.scene.cameras.main.width
    this.height = this.scene.cameras.main.height
  }
  executa(acao) {
    if (acao === 'morreu') {
      this.scene.sys.game.model.score = 0
      this.scene.sys.game.model.coins = 0
      this.scene.sys.game.model.state = 'morreu'
      this.txtMorreu = this.scene.make.text({
        x: this.width / 2,
        y: this.height / 2 - 50,
        text: 'MORREU :-(',
        style: {
          font: '30px PressStart2P',
          color: '#ecd36f',
          stroke: '#7c3e20',
          strokeThickness: 8
        }
      })
      this.txtMorreu.setOrigin(0.5)
      this.txtMorreu.setScrollFactor(0)
      this.txtMorreu.depth = 100
      this.scene.add.existing(this.txtMorreu)
      this.btnReiniciar = new Botao(this.scene, this.width / 2,
        this.height / 2 + 50, '[reiniciar]')
      this.btnReiniciar.target = 'Game'
      this.btnReiniciar.setScrollFactor(0)
      this.btnReiniciar.depth = 100

      this.scene.beth.destroy()

      //toca som da morte
      this.scene.sys.game.audio.morte.play()

    } else if (this.next) {
      this.next.executa(acao)
    }

  }
}

export default EstadoMorreu