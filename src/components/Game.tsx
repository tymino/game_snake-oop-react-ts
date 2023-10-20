import { useState } from 'react'
import { Board } from '../model/Board'

export const Game = () => {
  const [board] = useState(new Board())

  console.log(board)

  return <div className="game">board</div>
}
