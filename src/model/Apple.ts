import { Block } from './Block'

export class Apple extends Block {
  constructor([x, y]: number[]) {
    super(x, y)

    console.log('create Apple')
  }
}
