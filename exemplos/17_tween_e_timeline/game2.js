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
  var timeline = this.tweens.createTimeline()

  timeline.add({
    targets: amarelo,
    props: {
      x: 600
    },
    ease: 'Linear',
    duration: 3000
  })
  timeline.add({
    targets: amarelo,
    props: {
      y: 500
    },
    ease: 'Linear',
    duration: 3000
  })
  timeline.add({
    targets: amarelo,
    props: {
      x: 100
    },
    ease: 'Linear',
    duration: 3000
  })
  timeline.add({
    targets: amarelo,
    props: {
      y: 100
    },
    ease: 'Linear',
    duration: 3000
  })
  timeline.play()
}