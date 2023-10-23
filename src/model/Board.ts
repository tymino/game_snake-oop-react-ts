import { Cell } from './Cell'
import { EColors } from './EColors'

export class Board {
  cells: Cell[][] = []

  constructor() {
    this.initCells()
  }

  public initCells() {
    for (let i = 0; i < 10; i++) {
      const row: Cell[] = []

      for (let j = 0; j < 10; j++) {
        row.push(new Cell(i, j, EColors.WHITE))
      }

      this.cells.push(row)
    }
  }
}
