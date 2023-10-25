import styled from 'styled-components'
import { Cell } from '../model/Cell'
import { EColors } from '../model/enums/EColors'

interface ICellStyleProps {
  $colorBackground: EColors
  $colorBorder: EColors
}

const CellStyle = styled.div<ICellStyleProps>`
  width: 64px;
  height: 64px;
  background: ${({ $colorBackground }) => $colorBackground};
  border: 1px solid ${({ $colorBorder }) => $colorBorder};
`

interface IProps {
  cell: Cell
}

export const CellComponent = ({ cell }: IProps) => {
  return <CellStyle $colorBackground={cell.colorBackground} $colorBorder={cell.colorBorder} />
}
