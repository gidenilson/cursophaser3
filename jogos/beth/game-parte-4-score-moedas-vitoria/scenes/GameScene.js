import Mundo from '../classes/Mundo.js'
import Beth from '../classes/Beth.js'
import GrupoMoedas from '../classes/GrupoMoedas.js'
import Gui from '../classes/Gui.js'
import Colisoes from '../classes/Colisoes.js'
import Estados from '../classes/Estados.js'
class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {

    this.sys.game.model.state = 'jogando'


    //Cria o mundo e a Beth
    this.mundo = new Mundo(this)

    //cria Beth
    this.beth = new Beth(this, 400, 300, 'beth')

    //cria Gui
    this.gui = new Gui(this)

    //cria geranciador de Estados
    this.estados = new Estados(this)

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

    //grupo moedas
    this.grupoMoedas = new GrupoMoedas(this, this.mundo.moedas.objects)

    //gerenciador de colisões
    this.colisoes = new Colisoes(this)
    this.colisoes.on('acabou_moedas', () => this.estados.executa('vitoria'))

    //colisão com GrupoMoedas
    this.physics.add.overlap(this.grupoMoedas, this.beth, (a, b) => {
      this.colisoes.bethMoedas(b)
    })

  }
  update() {
    this.beth.update()
  }

}

export default GameScene