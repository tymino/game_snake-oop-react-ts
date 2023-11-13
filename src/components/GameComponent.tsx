import styled from 'styled-components'
import { EColors, ESizeGridAndCell } from '../model/enums'
import { useGame } from '../hooks/useGame'
import { CellComponent } from './CellComponent'
import { ButtonComponent } from './ButtonComponent'
import { ControlPadComponent } from './ControlPadComponent'

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
const BoardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(${ESizeGridAndCell.GridDimension}, 1fr);
  grid-template-columns: repeat(${ESizeGridAndCell.GridDimension}, 1fr);

  border-radius: 4px;
  border: 2px solid ${EColors.CELL_BORDER};
`

const PointWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`
const PointsContainer = styled.div`
  align-self: flex-end;
  margin-bottom: 6px;
  color: ${EColors.CELL_BORDER};
  font-size: 1.1rem;
  text-transform: capitalize;
`

export const GameComponent = () => {
  const { gridCells, points, record, togglePause, handlePadControl: padControl } = useGame()

  return (
    <GameContainer>
      <PointWrapper>
        <PointsContainer>points: {points}</PointsContainer>
        <PointsContainer>record: {record}</PointsContainer>
      </PointWrapper>
      <BoardContainer>
        {gridCells.map((row) =>
          row.map((cell) => {
            return <CellComponent key={cell.id} cell={cell} />
          })
        )}
      </BoardContainer>
      <ButtonComponent name={'stop/play game'} handleClick={togglePause} type="default" />
      <ControlPadComponent padControl={padControl} />
    </GameContainer>
  )
}
