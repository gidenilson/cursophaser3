/* pathTime: 4 segundos para percorer o path.
   qTime: fator de divisão para diminuir o
   pathTime em cada rodada.
   score: pontuação.
   timer: Tempo para pegar a abelha.
   state: estado atual do game.
*/
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