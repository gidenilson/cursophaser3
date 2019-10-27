class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }


  create() {
    // pega dimensões da tela
    var width = this.cameras.main.width
    var height = this.cameras.main.height

    // adiciona o logo
    this.add.image(width / 2, height / 2 - 150, "logo")

    // botao start
    this.txtStart = this.add.text(width / 2, height / 2 + 50, '[start]', {
      fontFamily: 'BigShoulders',
      color: '#f0ce00',
      fontSize: 60
    }).setOrigin(0.5).setStroke('#000', 4)

    this.txtStart.on('pointerdown', () => this.scene.start('Game')).setInteractive({
      useHandCursor: true
    })

    // botao Credits
    this.txtCredits = this.add.text(width / 2, height / 2 + 150, '[credits]', {
      fontFamily: 'BigShoulders',
      color: '#f0ce00',
      fontSize: 60
    }).setOrigin(0.5).setStroke('#000', 4)

    this.txtCredits.on('pointerdown', () => this.scene.start('Credits')).setInteractive({
      useHandCursor: true
    })
  }
}