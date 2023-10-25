import { Segment } from './Segment'
import { EColors } from '../enums/EColors'

export class Body extends Segment {
  color: EColors.SNAKE_BODY

  constructor(x: number, y: number) {
    super(x, y)
    this.color = EColors.SNAKE_BODY
  }
}
