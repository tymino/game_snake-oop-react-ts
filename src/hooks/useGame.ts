import { useState, useEffect } from 'react'
import { Game } from '../model/Game'

export const useGame = () => {
  const [game] = useState(() => new Game())
  const [gridCells, setGridCells] = useState(game.allCells)

  const togglePause = () => {
    game.toggleGamePause()
  }

  const handlePadControl = (key: string) => {
    game.setSnakeDirection(key)
  }

  useEffect(() => {
    let timer = -1

    timer = setInterval(() => {
      if (game.pause) return

      const updatedCells = game.tick()
      setGridCells(updatedCells)
    }, game.speed)

    return () => {
      clearInterval(timer)
    }
  }, [game])

  return {
    gridCells,
    points: game.point,
    record: game.record,
    togglePause,
    handlePadControl,
  }
}
