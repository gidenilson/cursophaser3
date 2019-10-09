class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {

    /**
     * carrega os assets do jogo
     */
    //carrega a imagem dos tiles
    this.load.image('tiles', 'assets/tuxmon.png')

    // simula carregamento de muitas imagens
    for (let i = 0; i < 10; i++) {
      this.load.image('temp' + i, 'assets/tuxmon.png')
    }

    //carrega o mapa
    this.load.tilemapTiledJSON('map', 'assets/map.json')

    //carrega o spritesheet da Beth
    this.load.spritesheet('beth', 'assets/beth.png', {
      frameWidth: 48,
      frameHeight: 48
    })

    //carrega imagem dos créditos
    this.load.image('credits', 'assets/credits.png')

    // pega dimensões da tela
    const width = this.cameras.main.width
    const height = this.cameras.main.height

    // adiciona o logo
    this.add.image(width / 2, height / 2 - 150, "logo")

    //progress bar
    this.progressbar = this.add.image(width / 2 - 100, height / 2 - 25, 'progressbar').setOrigin(0)

    //percent text
    this.percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '0%',
      style: {
        font: '20px PressStart2P',
        fill: '#7c3e20'
      }
    })
    this.percentText.setOrigin(0.5, 0.5)

    //loading assets text
    this.assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 90,
      style: {
        font: '15px PressStart2P',
        fill: '#7c3e20'
      }
    })
    this.assetText.setOrigin(0.5, 0.5)

    // update progress
    this.load.on('progress', (value) => {
      this.progressbar.setScale(value, 1)
      this.percentText.setText(parseInt(value * 100) + '%')
    })

    // update file progress
    this.load.on('fileprogress', (file) => {
      this.assetText.setText(file.key)
    })

    // remove progress
    this.load.on('complete', () => {
      this.progressbar.destroy()
      this.assetText.destroy()
      this.percentText.destroy()
    })

  }
  create() {
    //aguarda 3 segundos e vai para o menu
    this.time.delayedCall(500, () => this.scene.start('Menu'), [], this)
  }
}

export default PreloaderScene