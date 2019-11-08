class Timer extends Phaser.GameObjects.Text {
  constructor(scene) {

    // Passa para o pai a scene e a formatação do texto.
    super(scene, 300, 10, "time 10", {
      fontSize: 50,
      fontFamily: "BigShoulders",
      color: "#f0ce00"
    })

    // Define o contorno.
    this.setStroke('#000', 2)

    this.scene = scene

    // Adiciona na scene
    this.scene.add.existing(this)

    // Defini tempo para 10 segundos
    this.time = 10

    // Inicia contagem
    this.start()
  }

  // Método para reiniciar a contagem.
  restart() {
    // Remove os eventos do timer.
    this.scene.time.removeAllEvents()

    // Reinicia contatem
    this.start()

    // Atualiza o texto e ao mesmo tempo
    // decrementa a variável this.time.
    this.setText(`time ${this.time--}`)
  }

  // Método para parar a contagem.
  stop() {
    // Remove todos os eventos do timer.
    this.scene.time.removeAllEvents()
  }

  // Método para iniciar a contatem
  start() {
    // inicia contagem
    this.time = 10

    // Iniciar evento do timer para chamar o método
    // callback a cada 1 segundo.
    this.timedEvent = this.scene.time.addEvent({
      delay: 1000,
      callback: this.callback,
      callbackScope: this,
      loop: true
    });
  }

  // Método executado a cada 1 segundo.
  callback() {

    // Se time alcançou 0, remove todos os
    // eventos e emite o evento 'endtime'
    if (this.time === 0) {
      this.scene.time.removeAllEvents()
      this.emit('endtime')
    }

    // Atualiza o texto e ao mesmo tempo
    // decrementa a variável this.time.
    this.setText(`time ${this.time--}`)
  }
}