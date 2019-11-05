export default class Mundo {
  constructor(scene) {
    this.scene = scene
    this.map = this.scene.make.tilemap({
      key: "map"
    })
    this.tileset = this.map.addTilesetImage('autoestrada', 'tiles')
    this.autoestrada = this.map.createStaticLayer("estrada", this.tileset, 0, 0)
    this.autoestrada.setScale(0.5)
    this._player = this.map.findObject("posicao", obj => obj.name === "player")
    this._arrival = this.map.findObject("posicao", obj => obj.name === "arrival")
    this._eggs = this.map.filterObjects("posicao", obj => obj.name === "ovo")
  }

  get player() {
    return this._player
  }
  get arrival() {
    return this._arrival
  }
  get eggs() {
    return this._eggs
  }
}