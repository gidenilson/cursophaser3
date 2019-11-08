import Animacoes from '../classes/Animacoes.js'
export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {

    //carrega a imagem do tileset
    this.load.image('tiles', 'assets/map/tiles-rua-02.png')

    //carrega o mapa
    this.load.tilemapTiledJSON('map', 'assets/map/autoestrada.json')

    //carrega o spritesheet chicken
    this.load.spritesheet('chicken', 'assets/spritesheet/chicken.png', {
      frameWidth: 32,
      frameHeight: 32
    })

    // carrega a imagem do ovo
    this.load.image('ovo', 'assets/img/egg.png')

    //carrega textureatlas dos botoes
    this.load.atlas('botoes', 'assets/atlas/botoes.png',
      'assets/atlas/botoes.json')

    //carrega textureatlas dos veículos
    this.load.atlas('vehicles', 'assets/atlas/vehicles.png',
      'assets/atlas/vehicles.json')

    //carrega sons
    this.load.audio('trilha-jogo', [
      'assets/audio/Trilinha_3.ogg',
      'assets/audio/Trilinha_3-loop.mp3'
    ])
    this.load.audio('trilha-espera', [
      'assets/audio/Trilinha_7.ogg',
      'assets/audio/Trilinha_7.mp3'
    ])

    this.load.audio('passos', [
      'assets/audio/passos.ogg',
      'assets/audio/passos.mp3'
    ])

    this.load.audio('ovo', [
      'assets/audio/gema.ogg',
      'assets/audio/gema.mp3'
    ])

    this.load.audio('chicken', [
      'assets/audio/chicken.ogg',
      'assets/audio/chicken.mp3'
    ])

    this.load.audio('vitoria', [
      'assets/audio/victory.ogg',
      'assets/audio/victory.mp3'
    ])

    // pega dimensões da tela
    const width = this.cameras.main.width
    const height = this.cameras.main.height

    // adiciona o logo
    this.add.image(width / 2, height / 2 - 150, "logo")

    //progress bar
    this.progress = this.add.image(150,
      height / 2 - 25, 'progress')
    this.progress.setOrigin(0)

    //percent text
    this.percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '0%',
      style: {
        font: '30px PressStart2P',
        fill: '#7c3e20'
      }
    })
    this.percentText.setOrigin(0.5)

    //loading assets text
    this.assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 90,
      style: {
        font: '30px PressStart2P',
        fill: '#7c3e20'
      }
    })
    this.assetText.setOrigin(0.5)

    // update progress
    this.load.on('progress', (value) => {
      this.progress.setScale(value, 1)
      this.percentText.setText(parseInt(value * 100) + '%')
    })

    // update file progress
    this.load.on('fileprogress', (file) => {
      this.assetText.setText(file.key)
    })

    // remove progress
    this.load.on('complete', () => {
      this.progress.destroy()
      this.assetText.destroy()
      this.percentText.destroy()
    })

  }
  create() {

    new Animacoes(this)
    //aguarda 3 segundos e vai para o menu
    this.time.delayedCall(500, () => this.scene.start('Menu'), [], this)
  }
}