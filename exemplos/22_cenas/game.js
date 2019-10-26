// importa o objeto de configuração e todas as scenes
import phaser_config from './config/config.js'
import GameScene from './scenes/GameScene.js'
import PreloaderScene from './scenes/PreloaderScene.js'
import BootScene from './scenes/BootScene.js'
import MenuScene from './scenes/MenuScene.js'

// cria classe game, estendendo de Phaser.Game
class Game extends Phaser.Game {
  constructor() {
    // é obrigatório chamar o super da classe pai
    // passando o objeto de configuração
    super(phaser_config)
    // registra todas as scene do game
    this.scene.add('Boot', BootScene)
    this.scene.add('Preloader', PreloaderScene)
    this.scene.add('Menu', MenuScene)
    this.scene.add('Game', GameScene)
    // vai para a scene Boot
    this.scene.start('Boot')
  }
}
// instancia Game
const game = new Game();