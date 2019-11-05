export default class Animacoes {
  constructor(scene) {

    // frente
    scene.anims.create({
      key: 'frente',
      frames: [{
        key: 'chicken',
        frame: 7
      }]
    })

    // frente andando
    scene.anims.create({
      key: 'frente-andando',
      frames: scene.anims.generateFrameNumbers('chicken', {
        start: 6,
        end: 8
      }),
      frameRate: 10,
      repeat: -1
    })

    // costas
    scene.anims.create({
      key: 'costas',
      frames: [{
        key: 'chicken',
        frame: 1
      }]
    })

    // costas andando
    scene.anims.create({
      key: 'costas-andando',
      frames: scene.anims.generateFrameNumbers('chicken', {
        start: 0,
        end: 2
      }),
      frameRate: 10,
      repeat: -1
    })

    // direita
    scene.anims.create({
      key: 'direita',
      frames: [{
        key: 'chicken',
        frame: 4
      }]
    })

    // esquerda
    scene.anims.create({
      key: 'esquerda',
      frames: [{
        key: 'chicken',
        frame: 10
      }]
    })

    // direita andando
    scene.anims.create({
      key: 'direita-andando',
      frames: scene.anims.generateFrameNumbers('chicken', {
        start: 3,
        end: 5
      }),
      frameRate: 10,
      repeat: -1
    })

    // esquerda andando
    scene.anims.create({
      key: 'esquerda-andando',
      frames: scene.anims.generateFrameNumbers('chicken', {
        start: 9,
        end: 11
      }),
      frameRate: 10,
      repeat: -1
    })
  }
}