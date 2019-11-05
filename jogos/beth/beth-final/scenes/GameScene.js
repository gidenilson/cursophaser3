import Mundo from '../classes/Mundo.js'
import Beth from '../classes/Beth.js'
import Inimigo from '../classes/Inimigo.js'
import GrupoMoedas from '../classes/GrupoMoedas.js'
import Gui from '../classes/Gui.js'
import Colisoes from '../classes/Colisoes.js'
import Responsabilidades from '../classes/Responsabilidades.js'
import Audio from '../classes/Audio.js'
class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {

    this.sys.game.model.state = 'jogando'

    //toca trilha do jogo
    this.audio = this.sys.game.audio
    this.audio.espera.stop()
    this.audio.jogo.play('', {
      volume: 0.3,
      loop: true
    })


    //Cria o mundo
    this.mundo = new Mundo(this)

    //cria Beth
    this.beth = new Beth(this, 400, 300, 'beth')

    //cria inimigo
    this.inimigo = new Inimigo(this, 400, 300, 'inimigo', 10)

    //cria Gui
    this.gui = new Gui(this)

    //cria geranciador de responsabilidades
    this.responsabilidades = new Responsabilidades(this)

    //Posiciona Beth na scene
    this.beth.x = this.mundo.posicaoInicial.x
    this.beth.y = this.mundo.posicaoInicial.y

    this.physics.add.collider(this.beth, this.mundo.soloLayer)
    this.physics.add.collider(this.beth, this.mundo.predioLayer)
    this.physics.add.collider(this.beth, this.mundo.decoracaoLayer)

    //câmera segue Beth
    this.camera = this.cameras.main
    this.camera.startFollow(this.beth)
    this.camera.setBounds(0, 0, this.mundo.map.widthInPixels,
      this.mundo.map.heightInPixels)

    //grupo moedas
    this.grupoMoedas = new GrupoMoedas(this, this.mundo.moedas.objects)

    //gerenciador de colisões
    this.colisoes = new Colisoes(this)
    this.colisoes.on('acabou_moedas', () => this.responsabilidades.executa('vitoria'))
    this.colisoes.on('pegou', () => this.responsabilidades.executa('morreu'))

    //colisão com GrupoMoedas
    this.physics.add.overlap(this.grupoMoedas, this.beth,
      (a, b) => this.colisoes.bethMoedas(b))

    //colisao com o Inimigo
    this.physics.add.overlap(this.inimigo, this.beth,
      (a, b) => this.colisoes.bethInimigo())

  }
  update() {
    if (this.sys.game.model.state === 'jogando') {
      this.beth.update()
      this.inimigo.update()
    }
  }
}

export default GameScene