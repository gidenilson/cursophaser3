class Mundo {
  constructor(scene) {
    this.scene = scene
    this.map = this.scene.make.tilemap({
      key: "map"
    })
    this.tileset = this.map.addTilesetImage("tuxmon", "tiles")
    this.soloLayer = this.map.createStaticLayer("Solo", this.tileset, 0, 0)
    this.soloLayer.depth = 0
    this.soloLayer.setCollisionByProperty({
      colide: true
    })
    this.decoracaoLayer = this.map.createStaticLayer("Decoracao", this.tileset, 0, 0)
    this.decoracaoLayer.depth = 1
    this.decoracaoLayer.setCollisionByProperty({
      colide: true
    })
    this.predioLayer = this.map.createStaticLayer("Predio", this.tileset, 0, 0)
    this.predioLayer.depth = 2
    this.predioLayer.setCollisionByProperty({
      colide: true
    })
    this.telhadoLayer = this.map.createStaticLayer("Telhado", this.tileset, 0, 0)
    this.telhadoLayer.depth = 4
    this.telhadoLayer.setCollisionByProperty({
      colide: true
    })
  }
  get posicaoInicial() {
    const posicao = this.map.findObject("Posicoes", obj => obj.name === "player")
    return posicao
  }
}

export default Mundo