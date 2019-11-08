class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu')
  }

  create() {
    // pega dimensões da tela
    var width = this.cameras.main.width
    var height = this.cameras.main.height

    // adiciona o logo
    this.add.image(width / 2, height / 2 - 150, "logo")

    // Botão start
    // (é um texto normal, com a interatividade habilitada)
    this.txtStart = this.add.text(width / 2, height / 2 + 50,
      '[start]', {
        fontFamily: 'BigShoulders',
        color: '#f0ce00',
        fontSize: 60
      }).setOrigin(0.5).setStroke('#000', 4)
    // Habilita a interatividade
    this.txtStart.setInteractive()
    // Escuta o evento 'pointerdown' para passar o controle
    // para a scene Game.
    this.txtStart.on('pointerdown', () => this.scene.start('Game'))
  }
}