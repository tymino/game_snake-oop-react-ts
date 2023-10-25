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

  useEffect(() => {
    const timer = setInterval(() => {
      snake.move()
      setGameGrid(new Grid(snake))
    }, 500)

    return () => clearInterval(timer)
  }, [snake])

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
