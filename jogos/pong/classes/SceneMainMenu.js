class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super("SceneMainMenu");
  }
  preload() {}
  create() {
    this.scene.start("SceneMain");
  }
}