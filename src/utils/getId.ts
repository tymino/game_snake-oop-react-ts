function* getId() {
  let count = 0

  while (true) {
    yield count++
  }
}

export const getNewID = getId()
