import { Segment } from './Segment'
import { Body } from './Body'
import { EColors, EDirection } from '../enums'

export class Snake extends Segment {
  color: EColors.SNAKE_HEAD
  private dx: number
  private dy: number
  private body: Body[] = [new Body(0, 0)]

  constructor(x = 5, y = 4) {
    super(x, y)
    this.color = EColors.SNAKE_HEAD
    this.dx = 1
    this.dy = 0
  }

  get getBody() {
    return this.body
  }

  setDirection(key: string) {
    switch (key) {
      case EDirection.LEFT:
        this.dx = this.dx === 1 ? 1 : -1
        this.dy = 0
        break

      case EDirection.RIGHT:
        this.dx = this.dx === -1 ? -1 : 1
        this.dy = 0
        break

      case EDirection.UP:
        this.dx = 0
        this.dy = this.dy === 1 ? 1 : -1
        break

      case EDirection.DOWN:
        this.dx = 0
        this.dy = this.dy === -1 ? -1 : 1
        break

      default:
        return
    }
  }

  move({ width, height }: { width: number; height: number }) {
    this.x += this.dx
    this.y += this.dy

    if (this.x < 0) {
      this.x = width - 1
    }
    if (this.x >= width) {
      this.x = 0
    }

    if (this.y < 0) {
      this.y = height - 1
    }
    if (this.y >= height) {
      this.y = 0
    }
  }
}
