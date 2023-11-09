import { useState, useEffect } from 'react'
import { Game } from '../model/Game'

export const useGame = () => {
  const [game] = useState(() => new Game())
  const [gridCells, setGridCells] = useState(game.allCells)

  const togglePause = () => {
    game.toggleGamePause()
  }

  useEffect(() => {
    let timer = -1

    timer = setInterval(() => {
      if (game.pause) return

      const updatedCells = game.tick()
      setGridCells(updatedCells)
    }, game.speed)

    const handleSetDirection = ({ key }: KeyboardEvent) => {
      game.setSnakeDirection(key)
    }

    document.addEventListener('keydown', handleSetDirection)

    return () => {
      document.removeEventListener('keydown', handleSetDirection)
      clearInterval(timer)
    }
  }, [game])

  return {
    gridCells,
    points: game.point,
    togglePause,
  }
}
