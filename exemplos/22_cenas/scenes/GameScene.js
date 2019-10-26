export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    // texto
    this.texto = this.add.text(200, 150, 'Game', {
      fontSize: 40,
      fontFamily: "Arial"
    })
    this.texto.setOrigin(0.5)
    // chama a próxima cena depois de 3 segundos
    this.time.delayedCall(3000, () => this.scene.start('Boot'), [], this)
  }
}