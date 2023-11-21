function* getId() {
  let count = 0

  while (true) {
    yield count++

    if (count > 10000) count = 0
  }
}

const getNewID = getId()

export const getNewId = () => getNewID.next().value as number
