import { EColors } from '../enums/EColors'
import { getNewID } from '../../utils/getId'

export class Cell {
  id: number

  constructor(
    public x: number,
    public y: number,
    public colorBackground: EColors,
    public colorBorder: EColors.CELL_BORDER,
    public isEmpty: boolean
  ) {
    this.id = getNewID.next().value as number
    this.x = x
    this.y = y
    this.colorBackground = colorBackground
    this.colorBorder = colorBorder
    this.isEmpty = isEmpty
  }
}
