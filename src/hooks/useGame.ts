import { useState, useEffect, useCallback } from 'react'
import { Grid } from '../model/Grid'
import { Snake } from '../model/Snake/Snake'
import { Apple } from '../model/Apple'

export const useGame = () => {
  const [isGameRun, setIsGameRun] = useState(true)
  const [gameSpeed] = useState(200)
  const [gamePoint, setGamePoint] = useState(0)
  const [snake] = useState(new Snake())
  const [apple] = useState(new Apple())

  const updateGameGrid = useCallback(() => {
    const newGrid = new Grid()
    newGrid.initCells()
    newGrid.initSnake(snake)
    newGrid.initApple(apple.getPosition)

    return newGrid
  }, [apple.getPosition, snake])

  /*
  ////////
  send Snake, Apple in Grid
  ////////
  */

  const [grid, setGameGrid] = useState(updateGameGrid)

  const gameLoop = () => {
    let timer = -1

    timer = setInterval(() => {
      if (!isGameRun) return

      snake.move(grid.getSize)

      const isEated = apple.checkCollision(snake.getHeadPosition)

      if (isEated) {
        snake.updateBodySize()
        setGamePoint((curr) => ++curr)

        apple.setNewPosition(snake, grid.getSize)
      }

      setGameGrid(updateGameGrid)
    }, gameSpeed)

    const handleSetDirection = (e: KeyboardEvent) => {
      snake.setDirection(e.key)
    }

    document.addEventListener('keyup', handleSetDirection)

    return () => {
      document.removeEventListener('keyup', handleSetDirection)
      clearInterval(timer)
    }
  }

  useEffect(gameLoop, [apple, gameSpeed, grid.getSize, isGameRun, snake, updateGameGrid])

  const gridCells = grid.getCells

  return {
    gridCells,
    gamePoint,
    setIsGameRun,
  }
}
