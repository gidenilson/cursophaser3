import Mundo from '../classes/Mundo.js'
import Beth from '../classes/Beth.js'
class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {

    //Cria o mundo e a Beth
    this.mundo = new Mundo(this)
    this.beth = new Beth(this, 400, 300, 'beth')

    //Posiciona Beth na scene
    this.beth.x = this.mundo.posicaoInicial.x
    this.beth.y = this.mundo.posicaoInicial.y

    this.physics.add.collider(this.beth, this.mundo.soloLayer)
    this.physics.add.collider(this.beth, this.mundo.predioLayer)
    this.physics.add.collider(this.beth, this.mundo.decoracaoLayer)

    //câmera segue Beth
    this.camera = this.cameras.main
    this.camera.startFollow(this.beth)
    this.camera.setBounds(0, 0, this.mundo.map.widthInPixels, this.mundo.map.heightInPixels)
  }
  update() {
    this.beth.update()
  }

}

export default GameScene