import Egg from './Egg.js'
export default class EggsGroup extends Phaser.GameObjects.Group {
  constructor(scene, mundo) {
    super(scene.physics.world, scene)
    this.scene = scene
    this.mundo = mundo
    scene.add.existing(this)
    this.reset()

  }
  reset() {
    this.clear(true)
    let ovos = Phaser.Math.RND.shuffle(this.mundo.eggs)
    for (let i = 0; i < 20; i++) {
      this.add(new Egg(this.scene, ovos[i]))
    }
  }
}