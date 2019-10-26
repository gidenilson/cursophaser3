export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }
  preload() {
    // carregamento da barra de progresso e do logotipo
    this.load.image('bar', 'assets/bar.png')
    this.load.image('logo', 'assets/logo.png')
  }
  create() {
    // texto
    this.texto = this.add.text(200, 150, 'Boot', {
      fontSize: 40,
      fontFamily: "Arial"
    })
    this.texto.setOrigin(0.5)
    // chama a próxima cena após 3 segundos
    this.time.delayedCall(3000, () => this.scene.start('Preloader'), [], this)
  }
}