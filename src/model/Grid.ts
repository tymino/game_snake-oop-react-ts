import { Cell } from './Cell'
import { Body } from './Snake/Body'
import { EColors } from './enums'

interface IInitSnake {
  head: number[]
  body: Body[]
}

export class Grid {
  private widht: number
  private height: number
  private cells: Cell[][] = []
  private emptyCellsPosition: number[][] = []

  constructor(widht: number, height: number) {
    this.widht = widht
    this.height = height

    this.initGrid()
  }

  get size() {
    return [this.widht, this.height]
  }

  get allCells() {
    return this.cells
  }

  get emptyCells() {
    return this.emptyCellsPosition
  }

  initGrid() {
    this.initCells()
  }

  private initCells() {
    for (let i = 0; i < this.widht; i++) {
      const row: Cell[] = []

      for (let j = 0; j < this.height; j++) {
        row.push(new Cell(i, j, EColors.CELL_BACKGROUND, EColors.CELL_BORDER, true))
      }

      this.cells.push(row)
    }
    console.log('create Cells')
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
      const [bodyX, bodyY] = body[i].getPosition

      this.cells[bodyY][bodyX] = new Cell(
        bodyX,
        bodyY,
        EColors.SNAKE_BODY,
        EColors.CELL_BORDER,
        false
      )
    }

    this.updateEmptyCells()
  }

  initApple([x, y]: number[]) {
    this.cells[x][y] = new Cell(x, y, EColors.APPLE, EColors.CELL_BORDER, false)
    this.updateEmptyCells()
  }

  updateEmptyCells() {
    const cells: number[][] = []

    for (const row of this.cells) {
      for (const { x, y, isEmpty } of row) {
        if (isEmpty) {
          cells.push([x, y])
        }
      }
    }

    this.emptyCellsPosition = cells
  }
}
