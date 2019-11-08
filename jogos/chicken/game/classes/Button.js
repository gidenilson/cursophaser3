export default class Button extends Phaser.GameObjects.Image {
  constructor(scene, x, y, atlas, texture) {
    super(scene, x, y, atlas, texture)
    this._target = ""
    scene.add.existing(this)

    // Habilita a interatividade do botão
    this.setInteractive({
        useHandCursor: true
      })

      // Diminue a escala para 90%
      // quando o botão é pressionado
      .on('pointerdown', () => {
        this.setScale(0.9)
      })

      // Volta a escala para 100% e
      // vai para a scene definida na linha 25
      .on('pointerup', () => {
        this.setScale(1)
        scene.scene.start(this._target)
      })
  }

  // Método set para a variável this._target
  set target(target) {
    this._target = target
  }
}