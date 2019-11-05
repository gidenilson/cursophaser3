import Vehicle from './Vehicle.js'
export default class VehiclesGroup extends Phaser.GameObjects.Group {
  constructor(scene) {
    super(scene.physics.world, scene)
    scene.add.existing(this)
    this.runChildUpdate = true
    for (let i = 0; i < 9; i++) {
      this.add(new Vehicle(scene, 100 + 50 * i))
    }
    this.setDepth(200, 1)
  }
}