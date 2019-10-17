var config = {
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)

function preload() {
  //Carrega o spritesheet dos peixes
  this.load.spritesheet('peixes', 'spritesheet_peixes.png', {
    frameWidth: 136,
    frameHeight: 80
  })
}

function create() {
  //cria um path com 4 vértices (cantos)
  this.path = new Phaser.Curves.Path(50, 100).splineTo([164, 46, 274, 142, 412, 57, 522, 141, 664, 64])
  //pinta o path para que fique visível
  this.graphics = this.add.graphics()
  this.graphics.lineStyle(1, 0xffffff, 1)
  this.path.draw(this.graphics, 128)
  //instancia o sprite follower, definindo o path a ser seguido
  this.peixe = this.add.follower(this.path, 0, 0, 'peixes', 0);
  //inicializa o movimento do follower no path
  this.peixe.startFollow({
    positionOnPath: true,
    duration: 3000,
    yoyo: true,
    repeat: -1,
    rotateToPath: true,
    verticalAdjust: true
  })
}