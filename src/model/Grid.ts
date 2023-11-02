import { Cell } from './Cell'
import { Snake } from './Snake/Snake'
import { EColors, ESizeGridAndCell } from './enums'

export class Grid {
  private WIDTH = Number(ESizeGridAndCell.GridDimension)
  private HEIGHT = Number(ESizeGridAndCell.GridDimension)
  private cells: Cell[][] = []

  get getSize() {
    return [this.WIDTH, this.HEIGHT]
  }

  get getCells() {
    return this.cells
  }

  initCells() {
    for (let i = 0; i < this.WIDTH; i++) {
      const row: Cell[] = []

      for (let j = 0; j < this.HEIGHT; j++) {
        row.push(new Cell(i, j, EColors.CELL_BACKGROUND, EColors.CELL_BORDER))
      }

      this.cells.push(row)
    }
  }

  initSnake({ getPosition: [snakePosX, snakePosY], getBody }: Snake) {
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

  initApple([x, y]: number[]) {
    if (x > 0 && y > 0) {
      this.cells[x][y] = new Cell(x, y, EColors.APPLE, EColors.CELL_BORDER)
    }
  }
}
