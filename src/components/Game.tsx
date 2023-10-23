import { useState } from 'react'
import styled from 'styled-components'
import { Board } from '../model/Board'
import { Cell } from './Cell'

const BoardContainer = styled.div`
  border: 1px solid black;
`

const RowContainer = styled.div`
  display: flex;
`

export const Game = () => {
  const [board] = useState(new Board())

  console.log(board)

  return (
    <div className="game">
      <BoardContainer>
        {board.cells.map((row) => {
          return (
            <RowContainer>
              {row.map((cell) => {
                return <Cell cell={cell} />
              })}
            </RowContainer>
          )
        })}
      </BoardContainer>
    </div>
  )
}
