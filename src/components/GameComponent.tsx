import styled from 'styled-components'
import { useGame } from '../hooks/useGame'
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
  const [gridCells] = useGame()
  // console.log('GameComponent', gameGrid)

  return (
    <GameContainer>
      <BoardContainer>
        {gridCells.map((row) =>
          row.map((cell) => {
            return <CellComponent key={cell.id} cell={cell} />
          })
        )}
      </BoardContainer>
    </GameContainer>
  )
}
