class Audio {
  constructor(scene) {
    this.morte = scene.sound.add('morte')
    this.jogo = scene.sound.add('trilha-jogo')
    this.espera = scene.sound.add('trilha-espera')
    this.passos = scene.sound.add('passos')
    this.buzina = scene.sound.add('buzina')
    this.chicken = scene.sound.add('chicken')
    this.ovo = scene.sound.add('ovo')
    this.vitoria = scene.sound.add('vitoria')
  }
}

export default Audio