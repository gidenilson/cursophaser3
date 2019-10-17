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
  var verde = this.add.image(0, 200, 'peixes', 1)
  var timeline = this.tweens.createTimeline()

  timeline.add({
    targets: verde,
    props: {
      x: 600
    },
    ease: 'Elastic.easeOut',
    duration: 3000
  })

  timeline.add({
    targets: verde,
    props: {
      scale: 2
    },
    ease: 'Linear',
    duration: 3000
  })

  timeline.add({
    targets: verde,
    props: {
      rotation: 3
    },
    ease: 'Linear',
    duration: 3000
  })


  timeline.play();
}