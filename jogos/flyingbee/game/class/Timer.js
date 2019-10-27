class Timer extends Phaser.GameObjects.Text {
  constructor(scene) {
    super(scene, 300, 10, "time 10", {
      fontSize: 50,
      fontFamily: "BigShoulders",
      color: "#f0ce00"
    })
    this.setStroke('#000', 2);
    this.scene = scene
    this.scene.add.existing(this)
    this.time = 10
    this.start()
  }
  restart() {
    this.scene.time.removeAllEvents()
    this.start()
    this.setText(`time ${this.time--}`)
  }
  stop() {
    this.scene.time.removeAllEvents()
  }
  start() {
    // inicia contagem
    this.time = 10
    this.timedEvent = this.scene.time.addEvent({
      delay: 1000,
      callback: this.callback,
      callbackScope: this,
      loop: true
    });
  }
  callback() {
    if (this.time === 0) {
      this.scene.time.removeAllEvents()
      this.emit('endtime')
    }
    this.setText(`time ${this.time--}`)
  }
}