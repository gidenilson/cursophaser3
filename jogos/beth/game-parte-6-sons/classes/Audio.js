class Audio {
  constructor(scene) {
    this.scene = scene
    this.moeda = this.scene.sound.add('moeda')
    this.passos = this.scene.sound.add('passos')
    this.morte = this.scene.sound.add('morte')
    this.jogo = this.scene.sound.add('trilha-jogo')
    this.espera = this.scene.sound.add('trilha-espera')
  }
}

export default Audio