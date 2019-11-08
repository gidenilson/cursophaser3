export default class Colisoes extends Phaser.GameObjects.GameObject {
  constructor(scene, chicken, ovos, veiculos) {
    super(scene)
    this.scene = scene
    this.chicken = chicken
    this.ovos = ovos
    this.veiculos = veiculos

    // Chama o método ``ovoChicken(ovo)`` quando houver
    // sobreposição da personagem com o ovo.
    this.scene.physics.add.overlap(this.ovos, this.chicken,
      (ovo, chicken) => this.ovoChicken(ovo))

    // Chama o método ``veiculoChicken`` quando houver
    // sobreposição do veículo com a personagem.
    this.scene.physics.add.overlap(this.veiculos, this.chicken,
      (veiculo, chicken) => this.veiculoChicken())
  }
  // Quando personagem sobrepor o ovo
  ovoChicken(ovo) {
    // Destroi o ovo.
    ovo.destroy()
    // Toca o som do ovo.
    this.scene.sys.game.audio.ovo.play()
    // Emite o evento 'pegou_ovo'.
    this.emit('pegou_ovo')
    // Se os ovos acabaram emit o evento 'pegou_tudo'.
    if (this.ovos.getLength() == 0) {
      this.emit('pegou_tudo')
    }
  }

  // Quando há sobreposição entre personagem e veículo
  veiculoChicken() {
    // Toca o som da personagem.
    this.scene.sys.game.audio.chicken.play()
    // Emite o evento 'atropelou'.
    this.emit('atropelou')
  }
}