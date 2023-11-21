import { EColors } from '../enums/EColors'
import { getNewId } from '../../utils/getId'

export class Cell {
  public readonly id: number

  constructor(
    public x: number,
    public y: number,
    public colorBackground: EColors,
    public colorBorder: EColors.CELL_BORDER,
    public isEmpty: boolean
  ) {
    this.id = getNewId()
    this.x = x
    this.y = y
    this.colorBackground = colorBackground
    this.colorBorder = colorBorder
    this.isEmpty = isEmpty
  }
}

export type TCell = Cell
