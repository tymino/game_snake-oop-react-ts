import { Cell } from './Cell'
import { Snake } from './Snake/Snake'
import { EColors } from './enums/EColors'

export class Grid {
  private WIDTH: number = 10
  private HEIGHT: number = 10
  private cells: Cell[][] = []

  constructor(snake: Snake) {
    console.log('constructor Grid')

    this.initCells()
    // this.initSnake(snake)
  }

  get getSize() {
    return {
      width: this.WIDTH,
      height: this.HEIGHT,
    }
  }

  get getCells() {
    return this.cells
  }

  public initCells() {
    console.log('initCells')

    for (let i = 0; i < this.WIDTH; i++) {
      const row: Cell[] = []

      for (let j = 0; j < this.HEIGHT; j++) {
        row.push(new Cell(i, j, EColors.CELL_BACKGROUND, EColors.CELL_BORDER))
      }

      this.cells.push(row)
    }
  }

  public initSnake({ getPosX, getPosY, getBody }: Snake) {
    this.cells[getPosY][getPosX] = new Cell(
      getPosX,
      getPosY,
      EColors.SNAKE_HEAD,
      EColors.CELL_BORDER
    )

    console.log('initSnake')
    // for (let i = 0; i < getBody.length; i++) {
    //   console.log('getBody', getBody[i])
    //   console.log('test')
    // }
  }
}
