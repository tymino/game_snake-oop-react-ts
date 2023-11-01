import { Cell } from './Cell'
import { Snake } from './Snake/Snake'
import { EColors } from './enums/EColors'

export class Grid {
  private WIDTH: number = 10
  private HEIGHT: number = 10
  private cells: Cell[][] = []

  get getSize() {
    return [this.WIDTH, this.HEIGHT]
  }

  get getCells() {
    return this.cells
  }

  public initCells() {
    for (let i = 0; i < this.WIDTH; i++) {
      const row: Cell[] = []

      for (let j = 0; j < this.HEIGHT; j++) {
        row.push(new Cell(i, j, EColors.CELL_BACKGROUND, EColors.CELL_BORDER))
      }

      this.cells.push(row)
    }
  }

  public initSnake({ getPosition: [x, y], getBody }: Snake) {
    this.cells[y][x] = new Cell(x, y, EColors.SNAKE_HEAD, EColors.CELL_BORDER)

    for (let i = 0; i < getBody.length; i++) {
      console.log('getBody', getBody[i])
    }
  }
}
