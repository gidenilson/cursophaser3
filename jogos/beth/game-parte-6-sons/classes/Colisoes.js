class Colisoes extends Phaser.GameObjects.GameObject {
  constructor(scene) {
    super(scene)
    this.scene = scene
  }
  bethMoedas(moeda) {
    moeda.destroy()
    this.scene.sys.game.model.score += 10
    this.scene.sys.game.model.coins += 1
    this.scene.gui.update()
    if (this.scene.grupoMoedas.getLength() === 0) {
      this.emit('acabou_moedas')
    }

    //toca som da moeda
    this.scene.sys.game.audio.moeda.play()
  }
  bethInimigo() {
    this.emit('pegou')
  }
}

export default Colisoes