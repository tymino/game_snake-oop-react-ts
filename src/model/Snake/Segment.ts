export class Segment {
  constructor(protected x: number, protected y: number) {
    this.x = x
    this.y = y
  }

  get getPosX() {
    return this.x
  }

  get getPosY() {
    return this.y
  }
}
