export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {

    // simula carregamento de 300 assets
    for (let i = 0; i < 300; i++) {
      this.load.image('image' + Phaser.Math.RND.integer(), 'assets/logo.png')
    }
    //progress bar
    this.progressbar = this.add.image(200, 250, 'bar').setOrigin(0.5)
    //percent text
    this.percentText = this.add.text(200, 270, '0 %', {
      fontSize: 16,
      fontFamily: "Arial"
    })
    this.percentText.setOrigin(0.5, 0.5)
    // update progress
    this.load.on('progress', (value) => {
      this.progressbar.setScale(value, 1)
      this.percentText.setText(parseInt(value * 100) + '%');

    })
    // remove progress
    this.load.on('complete', () => {
      this.progressbar.destroy()
      this.percentText.destroy()
      // chama a próxima cena após 1 segundo
      this.time.delayedCall(1000, () => this.scene.start('Menu'), [], this)
    })
  }
}