var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
}
var game = new Phaser.Game(config);

function preload ()
{
  // sprite sheet
  this.load.spritesheet('sheet', 'spritesheet.png', { frameWidth: 54, frameHeight: 59 })

  // texture Atlas
  this.load.atlas('atlas', 'atlas.png', 'atlas.json')
}

function create ()
{
    // criando sprites
  this.add.sprite(50, 100, 'sheet', 2)
  this.add.sprite(300, 150, 'atlas', 'btnJogarOut')

  // criando imagens
  this.add.image(50, 150, 'sheet', 10)
  this.add.image(300, 300, 'atlas', 'parabens')
}