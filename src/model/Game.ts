import { Apple } from './Apple'
import { Grid } from './Grid'
import { Snake } from './Snake/Snake'
import { ESizeGridAndCell } from './enums'

export class Game {
  private gameWidth = ESizeGridAndCell.GridDimension
  private gameHeight = ESizeGridAndCell.GridDimension

  private gameSpeed = 100
  private gamePoint = 0
  private gamePointPerApple = 10
  private isGamePause = false

  private grid: Grid
  private snake: Snake
  private apple: Apple

  constructor() {
    this.grid = new Grid(this.gameWidth, this.gameHeight)
    this.snake = new Snake()
    this.grid.initSnake(this.snake.snakePosition)

    this.apple = new Apple(this.grid.findRandomEmptyCell())
    this.grid.initApple(this.apple.position)
  }

  get allCells() {
    return this.grid.allCells
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

  tick() {
    this.snake.move()
    this.checkCollision()
    this.grid.updateCells(this.snake.snakePosition, this.apple.position)

    return this.grid.allCells
  }

  checkCollision() {
    const isEatedBody = this.snake.checkCollisionBody()

    if (isEatedBody) {
      this.gamePoint = 0
    }

    this.checkCollisionWithApple()
  }

  checkCollisionWithApple() {
    const [headX, headY] = this.snake.position
    const [appleX, appleY] = this.apple.position

    if (headX === appleX && headY === appleY) {
      this.snake.updateBodySize()

      const emptyCell = this.grid.findRandomEmptyCell()
      this.apple.setNewPosition(emptyCell)
      this.gamePoint += this.gamePointPerApple
    }
  }
}
