/*
Game of Life rules:
  - Any live cell with fewer than two live neighbours dies, as if caused by under-population.
  - Any live cell with two or three live neighbours lives on to the next generation.
  - Any live cell with more than three live neighbours dies, as if by overcrowding.
  - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

const parseNeighbors = (x, y, seed) => {
  const coords = [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1]
  ]

  return coords.reduce((neighbors, curr) => {
    const cell = seed[curr[1]] ? seed[curr[1]][curr[0]] : undefined

    if (cell === undefined) return neighbors
    else return [...neighbors, cell]
  }, [])
}

const cellLives = (cell, neighbors) => {
  const livingCount = neighbors.filter((v) => !!v).length

  // Cell is currently alive.
  if (!!cell) return livingCount === 2 || livingCount === 3

  // Cell is currently dead.
  else return livingCount === 3
}

const nextGen = (seed) =>
  seed.reduce((res, curr, yIdx) => {
    let row = curr.map((v, idx) =>
      cellLives(v, parseNeighbors(idx, yIdx, seed)) ? 1 : 0
    )

    return [...res, row]
  }, [])

export { parseNeighbors, cellLives, nextGen }
