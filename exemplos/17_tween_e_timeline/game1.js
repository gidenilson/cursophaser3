var config = {
  scene: {
    preload: preload,
    create: create
  }
}

var game = new Phaser.Game(config)

function preload() {

  this.load.spritesheet('peixes', 'spritesheet_peixes.png', {
    frameWidth: 136,
    frameHeight: 80
  })
}

function create() {
  var amarelo = this.add.image(0, 80, 'peixes', 0)
  var verde = this.add.image(250, 80, 'peixes', 1)
  var rosa = this.add.image(400, 80, 'peixes', 2)

  this.tweens.add({
    targets: amarelo,
    props: {
      x: {
        value: 700,
        duration: 4000,
        flipX: true
      }
    },
    ease: 'Sine.easeInOut',
    yoyo: true,
    repeat: -1
  })

  this.tweens.add({
    targets: verde,
    props: {
      y: {
        value: 500,
        duration: 4000
      }
    },
    ease: 'Sine.easeInOut',
    yoyo: true,
    repeat: -1
  })

  this.tweens.add({
    targets: rosa,
    props: {
      x: {
        value: 700,
        duration: 4000,
        flipX: true
      },
      y: {
        value: 500,
        duration: 4000
      },
      scale: {
        value: 2,
        duration: 4000
      }
    },
    ease: 'Sine.easeInOut',
    yoyo: true,
    repeat: -1
  })
}