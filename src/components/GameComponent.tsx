import styled from 'styled-components'
import { useGame } from '../hooks/useGame'
import { CellComponent } from './CellComponent'
import { EColors, ESizeGridAndCell } from '../model/enums'

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

const PointsContainer = styled.div`
  align-self: flex-end;
  margin-bottom: 6px;
  color: ${EColors.CELL_BORDER};
  font-size: 1.1rem;
  text-transform: capitalize;
`

const ButtonStyle = styled.button`
  margin-top: 10px;
  padding: 10px 20px;

  background: ${EColors.SNAKE_BODY};
  border: 2px solid ${EColors.CELL_BORDER};
  border-radius: 4px;
  color: ${EColors.CELL_BORDER};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    background: ${EColors.CELL_BACKGROUND};
    color: ${EColors.BACKGROUND};
  }
  &:active {
    transform: translateY(2px);
  }
`

export const GameComponent = () => {
  const { gridCells, points, togglePause } = useGame()

  return (
    <GameContainer>
      <PointsContainer>points: {points}</PointsContainer>
      <BoardContainer>
        {gridCells.map((row) =>
          row.map((cell) => {
            return <CellComponent key={cell.id} cell={cell} />
          })
        )}
      </BoardContainer>
      <ButtonStyle onClick={togglePause}>stop/play game</ButtonStyle>
    </GameContainer>
  )
}
