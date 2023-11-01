export class Block {
  constructor(protected x: number, protected y: number) {
    this.x = x
    this.y = y
  }

  get getPosition() {
    return [this.x, this.y]
  }
}
