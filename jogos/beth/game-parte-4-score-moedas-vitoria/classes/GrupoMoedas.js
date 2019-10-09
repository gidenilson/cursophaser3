import Moeda from './Moeda.js'
class GrupoMoedas extends Phaser.Physics.Arcade.StaticGroup {
  constructor(scene, moedas) {
    super(scene.physics.world, scene)

    for (let i = 0; i < moedas.length; i++) {
      this.add(new Moeda(scene, moedas[i].x, moedas[i].y, 'moedas'))
    }

  }
}

export default GrupoMoedas