class Gui extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene)
    this.scene = scene

    // texto do score
    this.txtScore = new Phaser.GameObjects.Text(this.scene, 20, 10,
      "score 0", {
        fontSize: 50,
        fontFamily: "BigShoulders",
        color: "#f0ce00"
      })
    this.txtScore.setStroke('#000', 2)
    this.add(this.txtScore)

    // texto do level
    this.txtLevel = new Phaser.GameObjects.Text(this.scene, 550, 10,
      "level 1", {
        fontSize: 50,
        fontFamily: "BigShoulders",
        color: "#f0ce00"
      })
    this.txtLevel.setStroke('#000', 2)
    this.add(this.txtLevel)
    this.scene.add.existing(this)

    // Posiciona no canto superior esquedo da tela
    this.setPosition(0, 0)
  }

  // Atualiza o score com valor passado no parâmetro
  ScoreIncrement(increment) {
    gameConfig.score += increment
    this.txtScore.setText(`score ${gameConfig.score}`)
  }

  // Atualiza para o level seguinte.
  nextLevel() {
    gameConfig.level++
      this.txtLevel.setText(`level ${gameConfig.level}`)
  }

  // Zera o score e o level.
  reset() {
    this.txtScore.setText(`score ${gameConfig.score}`)
    this.txtLevel.setText(`level ${gameConfig.level}`)
  }
}