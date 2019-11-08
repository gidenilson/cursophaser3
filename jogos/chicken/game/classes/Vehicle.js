export default class Vehicle extends Phaser.GameObjects.Image {
  constructor(scene, y) {
    super(scene, 0, y, 'vehicles', 'car-truck1')
    this.scene.physics.world.enableBody(this, 0)
    this.scene.add.existing(this)
    this.setMoviment()
  }
  setMoviment() {
    this.setTexture('vehicles', 'car-truck' +
      Phaser.Math.RND.integerInRange(1, 5)
    )
    //console.log(this.width)
    this.body.setSize(this.width, this.height)

    this.setData('direction', Phaser.Math.RND.integerInRange(0, 1) ?
      'left' : 'rigth')

    this.setData('velocity', Phaser.Math.RND.integerInRange(100, 400))

    if (this.getData('direction') === 'left') {
      this.setX(1000)
      this.setFlipX(true)
      this.body.setVelocityX(-this.getData('velocity'))
    } else {
      this.setX(-200)
      this.setFlipX(false)
      this.body.setVelocityX(this.getData('velocity'))
    }
  }

  update() {
    if (this.x < -200 || this.x > 1000) {
      this.setMoviment()
    }
  }
}