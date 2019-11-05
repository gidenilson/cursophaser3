import phaser_config from './config/phaser.js'
import BootScene from './scenes/BootScene.js'
import PreloaderScene from './scenes/PreloaderScene.js'
import MenuScene from './scenes/MenuScene.js'
import GameScene from './scenes/GameScene.js'
import CreditsSene from './scenes/CreditsScene.js'

class Game extends Phaser.Game {
  constructor() {
    super(phaser_config)
    this.scene.add('BootScene', BootScene)
    this.scene.add('Preloader', PreloaderScene)
    this.scene.add('Menu', MenuScene)
    this.scene.add('Game', GameScene)
    this.scene.add('Credits', CreditsSene)
    this.scene.start('Boot')
  }
}

var game = new Game()

game.model = {
  score: 0,
  vidas: 3,
  ovos: 0,
  total: 0,
  estado: 'boot'
}