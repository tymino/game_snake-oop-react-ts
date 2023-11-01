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

  public initSnake({ getPosition: [snakePosX, snakePosY], getBody }: Snake) {
    // init Head segment
    this.cells[snakePosY][snakePosX] = new Cell(
      snakePosX,
      snakePosY,
      EColors.SNAKE_HEAD,
      EColors.CELL_BORDER
    )

    // init Body segments
    for (let i = 0; i < getBody.length; i++) {
      const [bodyPosX, bodyPosY] = getBody[i].getPosition

      this.cells[bodyPosY][bodyPosX] = new Cell(
        bodyPosX,
        bodyPosY,
        EColors.SNAKE_BODY,
        EColors.CELL_BORDER
      )
    }
  }
}
