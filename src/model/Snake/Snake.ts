import { Segment } from './Segment'
import { Body } from './Body'
import { EColors, EDirection } from '../enums'

export class Snake extends Segment {
  color: EColors.SNAKE_HEAD
  direction: EDirection
  body: Body[] = []

  constructor(x: number, y: number) {
    super(x, y)
    this.color = EColors.SNAKE_HEAD
    this.direction = EDirection.RIGHT
  }

  move() {
    this.x += 1
  }
}
