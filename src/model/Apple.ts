import { Block } from './Block'
import { Snake } from './Snake/Snake'
import { ESizeGridAndCell } from './enums'

export class Apple extends Block {
  x = -1
  y = -1
  constructor() {
    super(x, this.y)
  }

  setNewPosition(snake: Snake, gridSize: ESizeGridAndCell[]) {
    console.log(snake, gridSize)

    return [this.x = -1, this.y = -1]
  }

  checkCollision([headX, headY]: number[]) {
    if (headX === this.x && headY === this.y) {
      console.log('collision')
      return true
    }

    return false
  }
}
