class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {

    // pega dimensões da tela
    var width = this.cameras.main.width
    var height = this.cameras.main.height

    // adiciona o logo
    this.add.image(width / 2, height / 2 - 150, "logo")

    /**
     * carrega os assets do jogo
     */

    this.load.spritesheet('bee', 'assets/bee.png', {
      frameWidth: 64,
      frameHeight: 64
    });

    this.load.audio('music', ['assets/bumble-bee.ogg', 'assets/bumble-bee.mp3'])
    this.load.audio('zum', ['assets/bee.ogg', 'assets/bee.mp3'])
    this.load.audio('splash', ['assets/splash.ogg', 'assets/splash.mp3'])



    //progress bar
    this.boxbar = this.add.image(width / 2 - 150, height / 2 - 25, 'progressbar').setOrigin(0)
    this.boxbar.tint = 0x000000
    this.progressbar = this.add.image(width / 2 - 150, height / 2 - 25, 'progressbar').setOrigin(0)


    //loading text
    this.loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 5,
      text: 'loading...',
      style: {
        font: '30px BigShoulders',
        fill: '#00'
      }
    })
    this.loadingText.setOrigin(0.5, 0.5)

    //percent text
    this.percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '0%',
      style: {
        font: '40px BigShoulders',
        fill: '#00'
      }
    })
    this.percentText.setOrigin(0.5, 0.5)

    //loading assets text
    this.assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 90,
      text: 'Loading...',
      style: {
        font: '30px BigShoulders',
        fill: '#00'
      }
    })
    this.assetText.setOrigin(0.5, 0.5)

    // update progress
    this.load.on('progress', (value) => {
      this.progressbar.setScale(value, 1)
      this.percentText.setText(parseInt(value * 100) + '%');

    })

    // update file progress
    this.load.on('fileprogress', (file) => {
      this.assetText.setText(file.key)
    })

    // remove progress
    this.load.on('complete', () => {
      this.progressbar.destroy()
      this.boxbar.destroy()
      this.assetText.destroy()
      this.loadingText.destroy()
      this.percentText.destroy()
    })

  }
  create() {
    //aguarda 3 segundos e vai para o menu
    this.time.delayedCall(500, () => this.scene.start('Menu'), [], this)
  }
}