import styled from 'styled-components'
import { useGame } from '../hooks/useGame'
import { CellComponent } from './CellComponent'
import { ESizeGridAndCell } from '../model/enums/ESizeGridAndCell'

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
const BoardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(${ESizeGridAndCell.GridDimension}, 1fr);
  grid-template-columns: repeat(${ESizeGridAndCell.GridDimension}, 1fr);
`

const ButtonStyle = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  cursor: pointer;
`

export const GameComponent = () => {
  const { gridCells, points, togglePause } = useGame()
  // console.log('GameComponent', gameGrid)

  // const changeRunPauseGame = () => {
  //   setIsGameRun((current) => !current)
  // }

  return (
    <GameContainer>
      <div>{points}</div>
      <BoardContainer>
        {gridCells.map((row) =>
          row.map((cell) => {
            return <CellComponent key={cell.id} cell={cell} />
          })
        )}
      </BoardContainer>
      <ButtonStyle onClick={togglePause}>STOP/PLAY GAME</ButtonStyle>
    </GameContainer>
  )
}
