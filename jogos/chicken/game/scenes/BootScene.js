export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot')
  }
  preload() {
    //carrega imagens iniciais
    this.load.image('logo', 'assets/img/logo.png')
    this.load.image('progress', 'assets/img/progress.png')
  }
  create() {
    // inicializa o score com 0
    this.sys.game.model.score = 0
    //Vai para a cena Preloader
    this.scene.start('Preloader')
  }
}