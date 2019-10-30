class Beth extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture)
    this.scene = scene

    this.scene.add.existing(this)
    this.scene.physics.world.enableBody(this, 0);
    this.body.setSize(25, 10)
    this.body.setOffset(12, 30)
    this.depth = 3
    this.criaAnimacoes()

    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }
  update() {
    this.body.setVelocity(0)
    if (this.scene.sys.game.model.state !== 'jogando') {
      return
    }
    switch (true) {
      case this.cursors.left.isDown:
        this.body.setVelocity(-160, 0)
        this.anims.play('beth-esquerda-andando', true);
        this.setData('direcao', 'esquerda');
        break;

      case this.cursors.right.isDown:
        this.body.setVelocity(160, 0)
        this.anims.play('beth-direita-andando', true);
        this.setData('direcao', 'direita');
        break;

      case this.cursors.up.isDown:
        this.body.setVelocity(0, -160)
        this.anims.play('beth-costas-andando', true);
        this.setData('direcao', 'costas');
        break;

      case this.cursors.down.isDown:
        this.body.setVelocity(0, 160)
        this.anims.play('beth-frente-andando', true);
        this.setData('direcao', 'frente');
        break;

      default:
        this.body.setVelocity(0, 0);
        if (this.getData('direcao') == 'frente') {
          this.anims.play('beth-frente');
        }
        if (this.getData('direcao') == 'costas') {
          this.anims.play('beth-costas');
        }
        if (this.getData('direcao') == 'direita') {
          this.anims.play('beth-direita');
        }
        if (this.getData('direcao') == 'esquerda') {
          this.anims.play('beth-esquerda');
        }
    }
  }
  criaAnimacoes() {
    // frente
    this.scene.anims.create({
      key: 'beth-frente',
      frames: [{
        key: 'beth',
        frame: 0
      }]
    })

    // frente andando
    this.scene.anims.create({
      key: 'beth-frente-andando',
      frames: this.scene.anims.generateFrameNumbers('beth', {
        start: 0,
        end: 3
      }),
      frameRate: 10,
      repeat: -1
    })

    // costas
    this.scene.anims.create({
      key: 'beth-costas',
      frames: [{
        key: 'beth',
        frame: 8
      }]
    })

    // costas andando
    this.scene.anims.create({
      key: 'beth-costas-andando',
      frames: this.scene.anims.generateFrameNumbers('beth', {
        start: 8,
        end: 11
      }),
      frameRate: 10,
      repeat: -1
    })

    // direita
    this.scene.anims.create({
      key: 'beth-direita',
      frames: [{
        key: 'beth',
        frame: 12
      }]
    })

    // esquerda
    this.scene.anims.create({
      key: 'beth-esquerda',
      frames: [{
        key: 'beth',
        frame: 4
      }]
    })

    // direita andando
    this.scene.anims.create({
      key: 'beth-direita-andando',
      frames: this.scene.anims.generateFrameNumbers('beth', {
        start: 12,
        end: 15
      }),
      frameRate: 10,
      repeat: -1
    })

    // esquerda andando
    this.scene.anims.create({
      key: 'beth-esquerda-andando',
      frames: this.scene.anims.generateFrameNumbers('beth', {
        start: 4,
        end: 7
      }),
      frameRate: 10,
      repeat: -1
    });


  }
}
export default Beth