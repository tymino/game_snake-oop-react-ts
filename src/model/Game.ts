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

  private snake: Snake
  private apple: Apple
  private grid: Grid

  constructor() {
    this.grid = new Grid(this.gameWidth, this.gameHeight)
    this.snake = new Snake()
    this.apple = new Apple(this.createNewApple())

    this.grid.initGrid({
      snake: {
        head: this.snake.getPosition,
        body: this.snake.getBody,
      },
      apple: this.apple.getPosition,
    })
  }

  get gridCells() {
    return this.grid.getCells
  }

  setGamePause(state: boolean) {
    this.isGamePause = state
  }

  setDirection(key: string) {
    this.snakeDirection = key
  }

  createNewApple() {
    const appleX = randomInt(this.gameWidth)
    const appleY = randomInt(this.gameHeight)

    console.log('Game apple', appleX, appleY)

    return [appleX, appleY]
  }

  tick() {}
}
