class Bee {
  constructor(scene) {

    // Define a quantidade de pontos da curva para 4.
    this.pointsCounter = 4
    // Recupera de gameConfig o tempo
    // para percorer o caminho.
    this.time = gameConfig.pathTime

    this.scene = scene

    // Cria a curva temporariament como 1 ponto no zero.
    this.curve = new Phaser.Curves.Spline([0, 0, 0, 0])

    // Cria sprite como um PathFollower
    this.bee = new Phaser.GameObjects.PathFollower(scene,
      this.curve, -100, -100, 'bee')

    // Adiciona sprite na scene.
    this.scene.add.existing(this.bee)

    // Torna o sprite clicável.
    this.bee.setInteractive()

    // Escuta o evento 'pointerdown' da
    // abelha e emite o evento 'hit',
    // passando this.bee como parâmetro
    this.bee.on('pointerdown',
      () => this.bee.emit('hit', this.bee))

    // Chama o método que cria a animação
    this.animsCreate()

    // Define a animação 'voando'
    this.bee.anims.play('voando')

    // Escalona a abelha para o dobro do tamanho
    this.bee.setScale(2)

    // Chama o método reset() para começar
    this.reset()
  }

  // Retorna a posição da abelha.
  getPosition() {
    return {
      x: this.bee.x,
      y: this.bee.y
    }
  }

  // Reseta o game.
  reset() {

    // Variável para preencher com os pontos da curva
    let points = []

    // Cria os pontos aleatoriamente com
    // base em this.pointsCounter.
    for (let i = 0; i < this.pointsCounter; i++) {
      points.push(Phaser.Math.RND.between(0, 720))
      points.push(Phaser.Math.RND.between(0, 1280))
    }

    // Cria a curva com os pontos criados.
    this.curve = new Phaser.Curves.Spline(points)

    // Posiciona a abelha no início da curva.
    this.bee.setPosition(points[0], points[1])

    // Define novamente a curva a ser
    // seguida pela abelha.
    this.bee.setPath(this.curve)
    this.time = this.time / gameConfig.qTime

    // Inicia o movimento definindo a duração
    // com base em this.time.
    // A propriedade repeat = 0 torna
    // o movimento repetido indefinidamente.
    this.bee.startFollow({
      duration: this.time,
      yoyo: true,
      repeat: -1
    })
  }

  // Método par parar a abelha.
  stop() {
    this.bee.stopFollow()
    this.time = gameConfig.pathTime
  }

  // Cria a animação da abelha.
  animsCreate() {
    this.scene.anims.create({
      key: 'voando',
      frames: this.scene.anims.generateFrameNumbers('bee', {
        start: 0,
        end: 7
      }),
      frameRate: 40,
      repeat: -1
    })
  }
}