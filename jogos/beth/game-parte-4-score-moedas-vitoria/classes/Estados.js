import Botao from './Botao.js'
import EstadoVitoria from './EstadoVitoria.js'
import EstadoMorreu from './EstadoMorreu.js'
class Estados {
  constructor(scene) {
    this.scene = scene
  }
  executa(estado) {
    this.morreu = new EstadoMorreu(this.scene)
    this.vitoria = new EstadoVitoria(this.scene, this.morreu)
    this.vitoria.executa(estado)
  }
}

export default Estados