import styled from 'styled-components'
import { FC } from 'react'
import { Cell as CellClass } from '../model/Cell'

const SCell = styled.div`
  width: 20px;
  height: 20px;
  background: #db454533;
  border: 1px solid grey;
`

interface IProps {
  cell: CellClass
}

export const Cell: FC<IProps> = ({ cell }) => {
  console.log('class Cell', cell)

  return <SCell></SCell>
}
