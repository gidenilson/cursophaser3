import phaser_config from './config/phaser.js'
import GameScene from './scenes/GameScene.js'

class Game extends Phaser.Game {
  constructor() {
    super(phaser_config);
    //this.scene.add('Boot', BootScene);
    //this.scene.add('Preloader', PreloaderScene);
    //this.scene.add('Menu', MenuScene);
    //this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}

const game = new Game();