import { randomInt } from '../utils/randomInt'
import { Apple } from './Apple'
import { Grid } from './Grid'
import { Snake } from './Snake/Snake'
import { ESizeGridAndCell, EDirection } from './enums'

export class Game {
  private gameWidth = ESizeGridAndCell.GridDimension
  private gameHeight = ESizeGridAndCell.GridDimension

  private gameSpeed = 200
  private gamePoint = 0
  private isGamePause = false
  private snakeDirection = EDirection.RIGHT as string

  private grid: Grid
  private snake: Snake
  private apple: Apple

  constructor() {
    this.grid = new Grid(this.gameWidth, this.gameHeight)
    this.snake = new Snake()
    this.grid.initSnake({
      head: this.snake.getPosition,
      body: this.snake.bodyPositions,
    })

    this.apple = new Apple(this.findEmptyCell())
    this.grid.initApple(this.apple.getPosition)
  }

  get allCells() {
    return this.grid.allCells
  }

  get emptyCells() {
    return this.grid.emptyCells
  }

  setGamePause(state: boolean) {
    this.isGamePause = state
  }

  setDirection(key: string) {
    this.snakeDirection = key
  }

  findEmptyCell() {
    const length = this.grid.emptyCells.length
    const value = randomInt(length)

    return this.grid.emptyCells[value]
  }

  tick() {}
}
