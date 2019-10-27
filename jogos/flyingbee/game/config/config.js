const gameConfig = {
  pathTime: 4000,
  qTime: 1.05,
  score: 0,
  level: 1,
  timer: 10,
  state: 'run'
}

const phaserConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 720,
    height: 1280
  },
  backgroundColor: '#FFF'
}