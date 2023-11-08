import { Block } from './Block'

export class Apple extends Block {
  constructor([x, y]: number[]) {
    super(x, y)
  }

  setNewPosition([x, y]: number[]) {
    this.x = x
    this.y = y
  }
}
