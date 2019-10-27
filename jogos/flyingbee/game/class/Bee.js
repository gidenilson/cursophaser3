class Bee {
  constructor(scene) {
    this.pointsCounter = 4
    this.time = gameConfig.pathTime

    this.scene = scene
    this.curve = new Phaser.Curves.Spline([0, 0, 0, 0]);
    this.bee = new Phaser.GameObjects.PathFollower(scene, this.curve, -100, -100, 'bee')
    this.scene.add.existing(this.bee)
    this.bee.setInteractive()
    this.bee.on('pointerdown', () => this.bee.emit('hit', this.bee))
    this.animsCreate()
    this.bee.anims.play('voando')
    this.bee.setScale(2)
    this.reset()
  }
  getPosition() {
    return {
      x: this.bee.x,
      y: this.bee.y
    }
  }

  reset() {
    let points = []

    for (let i = 0; i < this.pointsCounter; i++) {
      points.push(Phaser.Math.RND.between(0, 720))
      points.push(Phaser.Math.RND.between(0, 1280))
    }

    this.curve = new Phaser.Curves.Spline(points);
    this.bee.setPosition(points[0], points[1])
    this.bee.setPath(this.curve)
    this.time = this.time / gameConfig.qTime

    this.bee.startFollow({
      duration: this.time,
      yoyo: true,
      repeat: -1
    })
  }
  stop() {
    this.bee.stopFollow()
    this.time = gameConfig.pathTime
  }
  animsCreate() {
    this.scene.anims.create({
      key: 'voando',
      frames: this.scene.anims.generateFrameNumbers('bee', {
        start: 0,
        end: 7
      }),
      frameRate: 40,
      repeat: -1
    })
  }
}