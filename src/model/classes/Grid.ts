import { randomInt } from '../../utils/randomInt'
import { Cell } from './Cell'
import { Body } from './Snake/Body'
import { EColors } from '../enums'
import { TPoint2D } from '../types/TPoint2D'

interface IInitSnake {
  head: TPoint2D
  body: Body[]
}

export class Grid {
  private cells: Cell[][] = []

  constructor(private widht: number, private height: number) {
    this.widht = widht
    this.height = height

    this.initCells()
  }

  get size(): TPoint2D {
    return [this.widht, this.height]
  }

  get allCells() {
    return this.cells
  }

  private initCells() {
    for (let i = 0; i < this.widht; i++) {
      const row: Cell[] = []

      for (let j = 0; j < this.height; j++) {
        row.push(new Cell(i, j, EColors.CELL_BACKGROUND, EColors.CELL_BORDER, true))
      }

      this.cells.push(row)
    }
  }

  initSnake({ head, body }: IInitSnake) {
    const [headX, headY] = head

    // init Head segment
    this.cells[headY][headX] = new Cell(
      headX,
      headY,
      EColors.SNAKE_HEAD,
      EColors.CELL_BORDER,
      false
    )

    // init Body segments
    for (let i = 0; i < body.length; i++) {
      const [bodyX, bodyY] = body[i].position

      this.cells[bodyY][bodyX] = new Cell(
        bodyX,
        bodyY,
        EColors.SNAKE_BODY,
        EColors.CELL_BORDER,
        false
      )
    }
  }

  initApple([x, y]: TPoint2D) {
    this.cells[y][x] = new Cell(x, y, EColors.APPLE, EColors.CELL_BORDER, false)
  }

  updateCells(snakePosition: IInitSnake, applePosition: TPoint2D) {
    this.cells = []
    this.initCells()
    this.initSnake(snakePosition)
    this.initApple(applePosition)
  }

  findRandomEmptyCell() {
    const cells: TPoint2D[] = []

    for (const row of this.cells) {
      for (const { x, y, isEmpty } of row) {
        if (isEmpty) {
          // reverse coords [x, y] -> [y, x]
          cells.push([y, x])
        }
      }
    }

    const length = cells.length
    const index = randomInt(length)

    return cells[index]
  }
}
