import Botao from './Botao.js'
import EstadoVitoria from './EstadoVitoria.js'
import EstadoMorreu from './EstadoMorreu.js'
class Estados {
  constructor(scene) {
    this.scene = scene
    this.audio = this.scene.sys.game.audio
  }
  executa(estado) {
    //toca só a trilha de espera
    this.audio.jogo.stop()
    this.audio.espera.play('', {
      volume: 0.3,
      loop: true
    })

    this.morreu = new EstadoMorreu(this.scene)
    this.vitoria = new EstadoVitoria(this.scene, this.morreu)
    this.vitoria.executa(estado)
  }
}

export default Estados