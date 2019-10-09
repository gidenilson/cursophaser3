class Gui extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene)
    this.scene = scene
    this.txtScore = scene.make.text({
      x: 10,
      y: 10,
      text: 'score:0',
      style: {
        font: '20px PressStart2P',
        color: '#ecd36f',
        stroke: '#7c3e20',
        strokeThickness: 8
      }
    })
    this.add(this.txtScore)
    this.txtMoedas = scene.make.text({
      x: 300,
      y: 10,
      text: 'moedas:0',
      style: {
        font: '20px PressStart2P',
        color: '#ecd36f',
        stroke: '#7c3e20',
        strokeThickness: 8
      }
    })
    this.add(this.txtMoedas)
    this.scene.add.existing(this)
    this.setScrollFactor(0)
    this.depth = 100
    this.txtScore.setText(`score:${this.scene.sys.game.model.score}`)
    this.txtMoedas.setText(`moedas:${this.scene.sys.game.model.coins}`)
  }
  update() {
    this.txtScore.setText(`score:${this.scene.sys.game.model.score}`)
    this.txtMoedas.setText(`moedas:${this.scene.sys.game.model.coins}`)
  }
}

export default Gui