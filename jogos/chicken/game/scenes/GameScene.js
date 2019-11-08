import Mundo from '../classes/Mundo.js'
import Chicken from '../classes/Chicken.js'
import VehiclesGroup from '../classes/VehiclesGroup.js'
import EggsGroup from '../classes/EggsGroup.js'
import Colisoes from '../classes/Colisoes.js'
import Acao from '../classes/Acao.js'
import Gui from '../classes/Gui.js'
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    //carrega o objeto audio
    this.audio = this.sys.game.audio
  }

  create() {

    this.sys.game.model.state = 'jogando'
    // para música de espera e toca música do jogo
    this.audio.espera.stop()
    this.audio.jogo.play('', {
      volume: 0.7,
      loop: true
    })

    // cria o mundo
    this.mundo = new Mundo(this)

    // cria chicken
    this.chicken = new Chicken(this, this.mundo)

    // cria veículos
    this.veiculos = new VehiclesGroup(this)
    // cria ovos
    this.ovos = new EggsGroup(this, this.mundo)

    // Cria Gui
    this.gui = new Gui(this)

    // instancia Acao
    this.acao = new Acao(this)

    // escuta chicken
    this.chicken.on('chegou', () => this.acao.chegou())

    // cria Colisoes
    this.colisoes = new Colisoes(this, this.chicken, this.ovos,
      this.veiculos)

    // escuta eventos
    this.colisoes.on('pegou_ovo', () => this.acao.pegouOvo())
    this.colisoes.on('pegou_tudo', () => this.acao.pegouTudo())
    this.colisoes.on('atropelou', () => this.acao.atropelou())
  }

  update() {
    this.chicken.update()
  }

}