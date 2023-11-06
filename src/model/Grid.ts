import { Apple } from './Apple'
import { Cell } from './Cell'
import { Snake } from './Snake/Snake'
import { EColors, ESizeGridAndCell } from './enums'

export class Grid {
  private WIDTH = Number(ESizeGridAndCell.GridDimension)
  private HEIGHT = Number(ESizeGridAndCell.GridDimension)
  private cells: Cell[][] = []
  private snake: Snake
  private apple: Apple

  constructor(snake: Snake, apple: Apple) {
    this.snake = snake
    this.apple = apple

    this.initCells()
    this.initSnake()
    this.initApple()
  }

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

  initSnake() {
    const [headX, headY] = this.snake.getPosition
    const body = this.snake.getBody

    // init Head segment
    this.cells[headY][headX] = new Cell(headX, headY, EColors.SNAKE_HEAD, EColors.CELL_BORDER)

    // init Body segments
    for (let i = 0; i < body.length; i++) {
      const [bodyX, bodyY] = body[i].getPosition

      this.cells[bodyY][bodyX] = new Cell(bodyX, bodyY, EColors.SNAKE_BODY, EColors.CELL_BORDER)
    }
  }

  initApple() {
    const [x, y] = this.apple.getPosition

    this.cells[x][y] = new Cell(x, y, EColors.APPLE, EColors.CELL_BORDER)
  }
}
