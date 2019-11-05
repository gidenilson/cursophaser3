import ResponsabilidadeVitoria from './ResponsabilidadeVitoria.js'
import ResponsabilidadeMorreu from './ResponsabilidadeMorreu.js'
class Responsabilidades {
  constructor(scene) {
    this.scene = scene
    this.audio = this.scene.sys.game.audio
  }
  executa(acao) {
    //toca só a trilha de espera
    this.audio.jogo.stop()
    this.audio.espera.play('', {
      volume: 0.3,
      loop: true
    })

    this.morreu = new ResponsabilidadeMorreu(this.scene)
    this.vitoria = new ResponsabilidadeVitoria(this.scene, this.morreu)
    this.vitoria.executa(acao)
  }
}

export default Responsabilidades