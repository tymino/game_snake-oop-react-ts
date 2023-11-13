import styled from 'styled-components'
import { TCell } from '../model/classes/Cell'
import { EColors } from '../model/enums/EColors'
import { ESizeGridAndCell } from '../model/enums/ESizeGridAndCell'

interface ICellStyleProps {
  $colorBackground: EColors
  $colorBorder: EColors
}

const CellStyle = styled.div<ICellStyleProps>`
  width: ${ESizeGridAndCell.CellSizeInPx}px;
  height: ${ESizeGridAndCell.CellSizeInPx}px;
  background: ${({ $colorBackground }) => $colorBackground};
  border: 1px solid ${({ $colorBorder }) => $colorBorder};
`

interface IProps {
  cell: TCell
}

export const CellComponent = ({ cell }: IProps) => {
  return <CellStyle $colorBackground={cell.colorBackground} $colorBorder={cell.colorBorder} />
}
