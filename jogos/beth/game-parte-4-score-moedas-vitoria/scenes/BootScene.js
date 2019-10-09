class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot')
  }

  preload() {
    //carrega imagens iniciais
    this.load.image('logo', 'assets/logo.png');
    this.load.image('progressbar', 'assets/progressbar.png');
  }

  create() {
    this.sys.game.model.score = 0
    this.sys.game.model.coins = 0
    //Vai para a cena Preloader
    this.scene.start('Preloader');
  }
}

export default BootScene