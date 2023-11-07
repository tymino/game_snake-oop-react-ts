import { Cell } from './Cell'
import { Body } from './Snake/Body'
import { EColors } from './enums'

interface IInitSnake {
  head: number[]
  body: Body[]
}

interface IInitGridProps {
  snake: IInitSnake
  apple: number[]
}

export class Grid {
  private widht: number
  private height: number
  private cells: Cell[][] = []

  constructor(widht: number, height: number) {
    this.widht = widht
    this.height = height
  }

  get getSize() {
    return [this.widht, this.height]
  }

  get getCells() {
    return this.cells
  }

  initGrid({ snake, apple }: IInitGridProps) {
    this.initCells()
    this.initSnake(snake)
    this.initApple(apple)
  }

  private initCells() {
    for (let i = 0; i < this.widht; i++) {
      const row: Cell[] = []

      for (let j = 0; j < this.height; j++) {
        row.push(new Cell(i, j, EColors.CELL_BACKGROUND, EColors.CELL_BORDER))
      }

      this.cells.push(row)
    }
  }

  initSnake({ head, body }: IInitSnake) {
    const [headX, headY] = head

    // init Head segment
    this.cells[headY][headX] = new Cell(headX, headY, EColors.SNAKE_HEAD, EColors.CELL_BORDER)

    // init Body segments
    for (let i = 0; i < body.length; i++) {
      const [bodyX, bodyY] = body[i].getPosition

      this.cells[bodyY][bodyX] = new Cell(bodyX, bodyY, EColors.SNAKE_BODY, EColors.CELL_BORDER)
    }
  }

  initApple([x, y]: number[]) {
    this.cells[x][y] = new Cell(x, y, EColors.APPLE, EColors.CELL_BORDER)
  }
}
