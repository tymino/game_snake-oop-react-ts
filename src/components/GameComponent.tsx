import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Grid } from '../model/Grid'
import { Snake } from '../model/Snake/Snake'
import { CellComponent } from './CellComponent'

const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`
const BoardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
`

export const GameComponent = () => {
  const [snake] = useState(new Snake(0, 0))
  const [gameGrid, setGameGrid] = useState(new Grid(snake))
  const [gridSize] = useState(gameGrid.getGridSize)
  const [isRunGame] = useState(true)

  useEffect(() => {
    const GAME_SPEED = 100
    let countGameFrame = 0

    const main = () => {
      if (!isRunGame) return

      if (countGameFrame > GAME_SPEED) {
        snake.move(gridSize)

        countGameFrame = 0
        setGameGrid(new Grid(snake))
      }

      countGameFrame++
      window.requestAnimationFrame(main)
    }

    main()
  }, [snake, gridSize, isRunGame])

  // console.log('GameComponent', gameGrid)

  return (
    <GameContainer>
      <BoardContainer>
        {gameGrid.getCells.map((row) => {
          return row.map((cell) => {
            return <CellComponent key={cell.id} cell={cell} />
          })
        })}
      </BoardContainer>
    </GameContainer>
  )
}
