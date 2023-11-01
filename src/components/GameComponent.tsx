import styled from 'styled-components'
import { useGame } from '../hooks/useGame'
import { CellComponent } from './CellComponent'

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
const BoardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
`

const ButtonStyle = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  cursor: pointer;
`

export const GameComponent = () => {
  const { gridCells, setIsGameRun } = useGame()
  // console.log('GameComponent', gameGrid)

  const changeRunPauseGame = () => {
    setIsGameRun((current) => !current)
  }

  return (
    <GameContainer>
      <BoardContainer>
        {gridCells.map((row) =>
          row.map((cell) => {
            return <CellComponent key={cell.id} cell={cell} />
          })
        )}
      </BoardContainer>
      <ButtonStyle onClick={changeRunPauseGame}>STOP/PLAY GAME</ButtonStyle>
    </GameContainer>
  )
}
