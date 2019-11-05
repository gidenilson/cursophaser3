export default class Colisoes extends Phaser.GameObjects.GameObject {
  constructor(scene, chicken, ovos, veiculos) {
    super(scene)
    this.scene = scene
    this.chicken = chicken
    this.ovos = ovos
    this.veiculos = veiculos
    this.scene.physics.add.overlap(this.ovos, this.chicken,
      (ovo, chicken) => this.ovoChicken(ovo))

    this.scene.physics.add.overlap(this.veiculos, this.chicken,
      (veiculo, chicken) => this.veiculoChicken())
  }
  ovoChicken(ovo) {
    ovo.destroy()
    this.scene.sys.game.audio.ovo.play()
    this.emit('pegou_ovo')
    if (this.ovos.getLength() == 0) {
      this.emit('pegou_tudo')
    }
  }
  veiculoChicken() {
    this.scene.sys.game.audio.chicken.play()
    this.emit('atropelou')
  }
}