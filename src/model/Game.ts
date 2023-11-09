import { randomInt } from '../utils/randomInt'
import { Apple } from './Apple'
import { Grid } from './Grid'
import { Snake } from './Snake/Snake'
import { ESizeGridAndCell } from './enums'

export class Game {
  private gameWidth = ESizeGridAndCell.GridDimension
  private gameHeight = ESizeGridAndCell.GridDimension

  private gameSpeed = 100
  private gamePoint = 0
  private isGamePause = false

  private grid: Grid
  private snake: Snake
  private apple: Apple

  constructor() {
    this.grid = new Grid(this.gameWidth, this.gameHeight)
    this.snake = new Snake()
    this.grid.initSnake(this.snake.snakePosition)

    this.apple = new Apple(this.findRandomEmptyCell())
    this.grid.initApple(this.apple.getPosition)
  }

  get allCells() {
    return this.grid.allCells
  }

  get emptyCells() {
    return this.grid.emptyCells
  }

  get speed() {
    return this.gameSpeed
  }

  get point() {
    return this.gamePoint
  }

  get pause() {
    return this.isGamePause
  }

  toggleGamePause() {
    this.isGamePause = !this.isGamePause
  }

  setSnakeDirection(key: string) {
    this.snake.setDirection(key)
  }

  findRandomEmptyCell() {
    const length = this.grid.emptyCells.length
    const value = randomInt(length)

    return this.grid.emptyCells[value]
  }

  tick() {
    this.snake.move()
    this.checkCollisionWithApple()
    this.grid.updateCells(this.snake.snakePosition, this.apple.getPosition)

    return this.grid.allCells
  }

  checkCollisionWithApple() {
    const [headX, headY] = this.snake.getPosition
    const [appleX, appleY] = this.apple.getPosition

    if (headX === appleX && headY === appleY) {
      this.apple.setNewPosition(this.findRandomEmptyCell())
      this.snake.updateBodySize()

      console.log('apple collision')
    }
  }
}