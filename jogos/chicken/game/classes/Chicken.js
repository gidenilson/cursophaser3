export default class Chicken extends Phaser.GameObjects.Sprite {
  constructor(scene, mundo) {
    super(scene, mundo.player.x / 2, mundo.player.y / 2, 'chicken', 7)
    this.scene = scene
    this.arrival = mundo.arrival
    this.player = mundo.player
    this.scene.add.existing(this)
    this.scene.physics.world.enableBody(this, 0)
    this.body.setCollideWorldBounds()
    this.body.setSize(20, 20)
    this.depth = 10
    this.cursors = this.scene.input.keyboard.createCursorKeys()
    this.audio = scene.sys.game.audio;
    this.audio.passos.play('', {
      volume: 0.5,
      loop: true
    })
    this.audio.passos.pause()
  }
  reset() {
    this.x = this.player.x / 2
    this.y = this.player.y / 2
  }
  update() {
    this.body.setVelocity(0)
    if (this.scene.sys.game.model.state !== 'jogando') {
      this.audio.passos.pause()
      this.anims.play('frente')
      return
    }
    // chicken chegou ?
    if (this.y <= this.arrival.y / 2) {
      this.emit('chegou')
    }

    switch (true) {
      case this.cursors.left.isDown:
        this.body.setVelocity(-160, 0)
        this.anims.play('esquerda-andando', true)
        this.setData('direcao', 'esquerda')
        this.audio.passos.resume()
        break

      case this.cursors.right.isDown:
        this.body.setVelocity(160, 0)
        this.anims.play('direita-andando', true)
        this.setData('direcao', 'direita')
        this.audio.passos.resume()
        break

      case this.cursors.up.isDown:
        this.body.setVelocity(0, -160)
        this.anims.play('costas-andando', true)
        this.setData('direcao', 'costas')
        this.audio.passos.resume()
        break

      case this.cursors.down.isDown:
        this.body.setVelocity(0, 160)
        this.anims.play('frente-andando', true)
        this.setData('direcao', 'frente')
        this.audio.passos.resume()
        break

      default:
        this.body.setVelocity(0, 0)
        this.audio.passos.pause()
        if (this.getData('direcao') == 'frente') {
          this.anims.play('frente')
        }
        if (this.getData('direcao') == 'costas') {
          this.anims.play('costas')
        }
        if (this.getData('direcao') == 'direita') {
          this.anims.play('direita')
        }
        if (this.getData('direcao') == 'esquerda') {
          this.anims.play('esquerda')
        }
    }
  }
}