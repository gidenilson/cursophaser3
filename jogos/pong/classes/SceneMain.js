class SceneMain extends Phaser.Scene {
  constructor() {
    super({
      key: "SceneMain"
    })
  }
  preload() {
    this.load.image("sprBall", "content/sprBall.png");
    this.load.image("sprPaddle", "content/sprPaddle.png");
    this.load.image("sprHalfLine", "content/sprHalfLine.png");
    this.load.audio("sndHit", "content/sndHit.wav");
  }
  createHalfLine() {
    for (var i = 0; i < this.game.config.height / 16; i++) {
      var line = this.add.sprite(this.game.config.width * 0.5, i * 24 + 8, "sprHalfLine");
      this.halfLines.add(line);
    }
  }
  reset() {
    if (this.scorePlayer > 10 || this.scoreCpu > 10) {
      this.setGameOver()
    } else {
      this.textScorePlayer.setVisible(true)
      this.textScoreCpu.setVisible(true)
      this.textWin.setVisible(false)
      this.isGameOver = false
      this.balls.clear(true, true)
    }
  }

  setGameOver() {}
  create() {
    this.sfx = {
      hit: this.sound.add("sndHit")
    }
    this.isGameOver = false
    this.scorePlayer = 0
    this.scoreCpu = 0
    this.balls = this.add.group()
    var ball = new Ball(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5
    )
    this.balls.add(ball)
    this.player = new PaddlePlayer(
      this,
      32,
      this.game.config.height * 0.5
    )
    this.cpu = new PaddleCPU(
      this,
      this.game.config.width - 32,
      this.game.config.height * 0.5
    )
    this.halfLines = this.add.group()
    this.createHalfLine()
    this.textScorePlayer = this.add.text(
      this.game.config.width * 0.25,
      64,
      this.scorePlayer, {
        fontFamily: "monospace",
        fontSize: 64
      }
    );
    this.textScorePlayer.setOrigin(0.5);
    this.textScoreCpu = this.add.text(
      this.game.config.width * 0.75,
      64,
      this.scoreCpu, {
        fontFmaily: "monospace",
        fontSize: 64
      }
    );
    this.textScoreCpu.setOrigin(0.5)
    this.textWin = this.add.text(
      this.game.config.width * 0.5,
      64, "", {
        fontFamily: "monospace",
        fontSize: 64
      }
    )
    this.textWin.setOrigin(0.5)
    this.textWin.setVisible(false)
    this.physics.add.collider(this.balls, this.player, function(ball, player) {
      var dist = Phaser.Math.Distance.Between(0, ball.y, 0, player.y)
      if (ball.y < player.y) {
        dist = -dist;
      }
      ball.body.velocity.y = dist * 30
      this.sfx.hit.play()
    }, null, this)
    this.physics.add.collider(this.balls, this.cpu, function(cpu, ball) {
      var dist = Phaser.Math.Distance.Between(0, ball.y, 0, cpu.y);
      if (ball.y < cpu.y) {
        dist = -dist
      }
      ball.body.velocity.y = dist * 30
      16
      this.sfx.hit.play()
    }, null, this)
  }
  update() {
    if (this.balls.getChildren().length > 0) {
      var ball = this.balls.getChildren()[0]
      ball.update()
      if (ball.x < 0) {
        this.scoreCpu++
          this.textScoreCpu.setText(this.scoreCpu)
        this.reset()
      } else if (ball.x > this.game.config.width) {
        this.scorePlayer++;
        this.textScorePlayer.setText(this.scorePlayer)
        this.reset()
      }
      if (ball.body !== undefined) {
        var cpuVelY = ball.body.velocity.y
        this.cpu.body.velocity.y = cpuVelY * Phaser.Math.Between(6, 14) * 0.1
      }
    }
    this.player.update()
    this.player.y = this.input.activePointer.y
  }
}