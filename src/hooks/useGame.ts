import { useState, useEffect, useCallback } from 'react'
import { Grid } from '../model/Grid'
import { Snake } from '../model/Snake/Snake'

export const useGame = () => {
  // const [isGameRun] = useState(true)
  const [snake] = useState(new Snake())

  const updateGame = useCallback(() => {
    const newGrid = new Grid()
    newGrid.initCells()
    newGrid.initSnake(snake)

    return newGrid
  }, [snake])

  const [grid, setGameGrid] = useState(updateGame)

  const gameLoop = () => {
    let timer = -1

    timer = setInterval(() => {
      // if (!isGameRun) return

      snake.move(grid.getSize)
      setGameGrid(updateGame)
    }, 1000)

    const handleSetDirection = (e: KeyboardEvent) => {
      snake.setDirection(e.key)
    }

    document.addEventListener('keyup', handleSetDirection)

    return () => {
      document.removeEventListener('keyup', handleSetDirection)
      clearInterval(timer)
    }
  }

  useEffect(gameLoop, [grid.getSize, snake, updateGame])

  const gridCells = grid.getCells

  return [gridCells]
}
