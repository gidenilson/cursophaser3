class Inimigo extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture)
    this.scene = scene

    this.scene.add.existing(this)
    this.scene.physics.world.enableBody(this, 0)
    this.body.setSize(25, 10)
    this.body.setOffset(12, 30)
    this.depth = 3
    this.criaAnimacoes()


  }
  update() {


    let vectorB = new Phaser.Math.Vector2(this.scene.beth)
    let vectorE = new Phaser.Math.Vector2(this);

    // persegue
    this.scene.physics.moveToObject(this, this.scene.beth, 100)


    /////////////////////////////////
    // define a animação do inimigo//
    /////////////////////////////////


    let animacao = this.animacao;

    let angle = 180 * this.body.velocity.angle() / 3.14

    if (angle >= 0 && angle < 45) {
      animacao = 'inimigo-direita-andando'
    } else if (angle >= 45 && angle < 135) {
      animacao = 'inimigo-frente-andando'
    } else if (angle >= 135 && angle < 255) {
      animacao = 'inimigo-esquerda-andando'
    } else if (angle >= 255 && angle < 315) {
      animacao = 'inimigo-costas-andando'
    } else if (angle >= 315 && angle < 360) {
      animacao = 'inimigo-direita-andando'
    }
    if (animacao !== this.animacao) {
      this.anims.play(animacao)
      this.animacao = animacao
    }
  }
  criaAnimacoes() {

    // frente andando
    this.scene.anims.create({
      key: 'inimigo-frente-andando',
      frames: this.scene.anims.generateFrameNumbers('inimigo', {
        start: 10,
        end: 11
      }),
      frameRate: 10,
      repeat: -1
    })

    // costas andando
    this.scene.anims.create({
      key: 'inimigo-costas-andando',
      frames: this.scene.anims.generateFrameNumbers('inimigo', {
        start: 8,
        end: 9
      }),
      frameRate: 10,
      repeat: -1
    })

    // direita andando
    this.scene.anims.create({
      key: 'inimigo-direita-andando',
      frames: this.scene.anims.generateFrameNumbers('inimigo', {
        start: 14,
        end: 15
      }),
      frameRate: 10,
      repeat: -1
    })

    // esquerda andando
    this.scene.anims.create({
      key: 'inimigo-esquerda-andando',
      frames: this.scene.anims.generateFrameNumbers('inimigo', {
        start: 12,
        end: 13
      }),
      frameRate: 10,
      repeat: -1
    })
  }
}

export default Inimigo