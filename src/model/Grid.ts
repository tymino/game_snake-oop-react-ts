import { Cell } from './Cell'
import { Snake } from './Snake/Snake'
import { EColors } from './enums/EColors'

export class Grid {
  private WIDTH: number = 10
  private HEIGHT: number = 10
  private cells: Cell[][] = []

  constructor(snake: Snake) {
    this.initCells()
    this.initSnake(snake)
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

  public initSnake(snake: Snake) {
    this.cells[snake.y][snake.x] = new Cell(
      snake.x,
      snake.y,
      EColors.SNAKE_HEAD,
      EColors.CELL_BORDER
    )

    // this.cells = this.cells.map((rowCells) => {
    //   if (rowCells[0].x === this.snake?.x) {
    //     return rowCells.map((cell) => {
    //       if (cell.y === this.snake?.y) {
    //         return new Cell(this.snake.x, this.snake.y, EColors.SNAKE_HEAD, EColors.CELL_BORDER)
    //       }

    //       return cell
    //     })
    //   }

    //   return rowCells
    // })
  }
}
