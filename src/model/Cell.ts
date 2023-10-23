import { EColors } from './EColors'

export class Cell {
  constructor(public x: number, public y: number, public color: EColors) {
    this.x = x
    this.y = y
    this.color = color
  }
}
