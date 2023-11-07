import { useState, useEffect } from 'react'
import { Game } from '../model/Game'

/*
Создать класс Game
- знает о поле, змейке, еде
- каждый интервал useGame вызывать метод tick
  класса Game, который просчитываут поле
- класс Game возвращает только просчитанное поле
  для обновления useState и ререндера


*/

export const useGame = () => {
  const [game] = useState(() => new Game())

  // const [apple, setApple] = useState(() => new Apple(createNewApple()))
  // const [apple, setApple] = useState(() => {
  //   console.log('tick')
  //   return new Apple(createNewApple())
  // })

  // const updateGameGrid = useCallback(() => new Grid(snake, apple), [snake, apple])

  // const [grid, setGameGrid] = useState(updateGameGrid)

  useEffect(() => {
    let timer = -1

    timer = setInterval(() => {
      // if (!isGameRun) return
    }, 200)

    const handleSetDirection = ({ key }: KeyboardEvent) => {
      game.setDirection(key)
    }

    document.addEventListener('keyup', handleSetDirection)

    return () => {
      document.removeEventListener('keyup', handleSetDirection)
      clearInterval(timer)
    }
  }, [game])

  return {
    gridCells: game.allCells,
  }
}
