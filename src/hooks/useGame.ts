import { useState, useEffect } from 'react'
import { Grid } from '../model/Grid'
import { Snake } from '../model/Snake/Snake'

export const useGame = () => {
  const [snake] = useState(new Snake())
  const [grid, setGameGrid] = useState(new Grid(snake))
  const [isGameRun] = useState(true)

  const gameLoop = () => {
    let timer = -1

    timer = setInterval(() => {
      if (!isGameRun) return

      snake.move(grid.getSize)
      setGameGrid(new Grid(snake))
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

  useEffect(gameLoop, [snake, isGameRun, grid.getSize])

  const gridCells = grid.getCells

  return [gridCells]
}
