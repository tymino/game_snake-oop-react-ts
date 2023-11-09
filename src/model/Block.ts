import { TPoint2D } from './types/TPoint2D'

export class Block {
  constructor(protected x: number, protected y: number) {
    this.x = x
    this.y = y
  }

  get position(): TPoint2D {
    return [this.x, this.y]
  }
}
