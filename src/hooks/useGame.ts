import { useState, useEffect, useCallback } from 'react'
import { Grid } from '../model/Grid'
import { Snake } from '../model/Snake/Snake'
import { Apple } from '../model/Apple'
import { ESizeGridAndCell } from '../model/enums'
import { randomInt } from '../utils/randomInt'

export const useGame = () => {
  const [gameSpeed] = useState(200)
  const [gamePoint] = useState(0)
  const [isGameRun, setIsGameRun] = useState(true)
  const [snake] = useState(new Snake())

  const createNewApple = () => {
    const appleX = randomInt(ESizeGridAndCell.GridDimension)
    const appleY = randomInt(ESizeGridAndCell.GridDimension)

    console.log('apple', appleX, appleY)

    return [appleX, appleY]
  }

  const [apple, setApple] = useState(() => {
    console.log('tick')
    return new Apple(createNewApple())
  })
  const updateGameGrid = useCallback(() => new Grid(snake, apple), [snake, apple])

  const [grid, setGameGrid] = useState(updateGameGrid)

  const checkCollisionSnakeAndApple = () => {
    const [appleX, appleY] = apple.getPosition
    const [headX, headY] = snake.getPosition

    if (headX === appleX && headY === appleY) {
      console.log('collision')
      return true
    }

    return false
  }

  useEffect(() => {
    let timer = -1

    timer = setInterval(() => {
      if (!isGameRun) return

      snake.move()
      const isEated = checkCollisionSnakeAndApple()

      if (isEated) {
        snake.updateBodySize()
        setGamePoint((curr) => ++curr)

        const newApple = new Apple(createNewApple())
        setApple(newApple)
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
  }, [apple, gameSpeed, grid.getSize, isGameRun, snake, updateGameGrid])

  const gridCells = grid.getCells

  return {
    gridCells,
    gamePoint,
    setIsGameRun,
  }
}
