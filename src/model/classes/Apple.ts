import { TPoint2D } from '../types/TPoint2D'
import { Block } from './Block'

export class Apple extends Block {
  constructor([x, y]: TPoint2D) {
    super(x, y)
  }

  setNewPosition([x, y]: TPoint2D) {
    this.x = x
    this.y = y
  }
}
