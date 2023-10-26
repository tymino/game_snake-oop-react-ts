import { useState, useEffect } from 'react'
import { Grid } from '../model/Grid'
import { Snake } from '../model/Snake/Snake'

export const useGame = () => {
  const [snake] = useState(new Snake(0, 0))
  const [grid, setGameGrid] = useState(new Grid(snake))
  const [gridSize] = useState(grid.getSize)
  const [isGameRun] = useState(true)
  const [gameSpeed] = useState(100)

  useEffect(() => {
    let countGameFrame = 0

    const main = () => {
      if (!isGameRun) return

      if (countGameFrame > gameSpeed) {
        snake.move(gridSize)

        countGameFrame = 0
        setGameGrid(new Grid(snake))
      }

      countGameFrame++
      window.requestAnimationFrame(main)
    }

    main()
  }, [snake, gridSize, isGameRun, gameSpeed])

  const gridCells = grid.getCells

  return [gridCells]
}
