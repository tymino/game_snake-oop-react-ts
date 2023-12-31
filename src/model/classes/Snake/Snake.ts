import { Block } from '../Block'
import { Body } from './Body'
import { EDirection, ESizeGridAndCell } from '../../enums'

export class Snake extends Block {
  private dx: number
  private dy: number
  private isGrow = false
  private body: Body[] = []

  constructor(
    x = Math.floor(ESizeGridAndCell.GridDimension / 2),
    y = Math.floor(ESizeGridAndCell.GridDimension / 2)
  ) {
    super(x, y)
    this.dx = 1
    this.dy = 0

    this.createBody()

    document.addEventListener('keydown', this.handleKeyDown)
  }

  get snakePosition() {
    return {
      head: this.position,
      body: this.body,
    }
  }

  updateBodySize() {
    this.isGrow = true
  }

  createBody(segments = 10) {
    for (let i = 1; i <= segments; i++) {
      this.body.push(new Body(this.x - i, this.y))
    }
  }

  handleKeyDown = ({ key }: KeyboardEvent) => {
    this.setDirection(key)
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

  checkCollisionBody() {
    for (let i = 0; i < this.body.length; i++) {
      const segment = this.body[i]
      const [segmentX, segmentY] = segment.position

      if (segmentX === this.x && segmentY === this.y) {
        this.body = this.body.slice(0, i)

        return true
      }
    }
  }

  move() {
    const newSegment = new Body(this.x, this.y)

    this.x += this.dx
    this.y += this.dy

    if (this.x < 0) {
      this.x = ESizeGridAndCell.GridDimension - 1
    }
    if (this.x >= ESizeGridAndCell.GridDimension) {
      this.x = 0
    }

    if (this.y < 0) {
      this.y = ESizeGridAndCell.GridDimension - 1
    }
    if (this.y >= ESizeGridAndCell.GridDimension) {
      this.y = 0
    }

    this.body.unshift(newSegment)

    if (!this.isGrow) this.body.pop()

    this.isGrow = false
  }
}
