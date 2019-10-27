class GameSounds {
  constructor(scene) {
    this.scene = scene
    this.music = this.scene.sound.add('music')
    this.zum = this.scene.sound.add('zum')
    this.death = this.scene.sound.add('splash')
  }
  play() {
    this.music.play({
      loop: true,
      volume: 0.5
    })
    this.zum.play({
      loop: true,
      volume: 0.5
    })
  }
  stop() {
    this.music.stop()
    this.zum.stop()
  }
  pause() {
    this.music.pause()
    this.zum.pause()
  }
  resume() {
    this.music.resume()
    this.zum.resume()
  }
  splash() {
    this.death.play()
  }

}