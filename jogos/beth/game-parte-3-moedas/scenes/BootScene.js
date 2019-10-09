class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    //carrega imagens iniciais
    this.load.image('logo', 'assets/logo.png');
    this.load.image('progressbar', 'assets/progressbar.png');
  }

  create() {
    //Vai para a cena Preloader
    this.scene.start('Preloader');
  }
}

export default BootScene