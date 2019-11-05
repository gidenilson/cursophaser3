export default class Gui extends Phaser.GameObjects.Container {
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
        stroke: '#2F643C',
        strokeThickness: 8
      }
    })
    this.add(this.txtScore)
    this.txtOvos = scene.make.text({
      x: 400,
      y: 10,
      text: 'ovos:0',
      style: {
        font: '20px PressStart2P',
        color: '#ecd36f',
        stroke: '#2F643C',
        strokeThickness: 8
      }
    })
    this.add(this.txtOvos)
    this.scene.add.existing(this)
    this.setScrollFactor(0)
    this.depth = 100
    this.txtScore.setText(`score:${this.scene.sys.game.model.score}`)
    this.txtOvos.setText(`ovos:${this.scene.sys.game.model.ovos}`)
  }
  update() {
    this.txtScore.setText(`score:${this.scene.sys.game.model.score}`)
    this.txtOvos.setText(`ovos:${this.scene.sys.game.model.ovos}`)
  }
}