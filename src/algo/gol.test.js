import { parseNeighbors, cellLives, nextGen } from "./gol"
import { blinker, toad, glider } from "./seeds"

describe("game of life", () => {
  test("parses neighboring cells correctly", () => {
    const { seed } = blinker

    expect(parseNeighbors(1, 1, seed)).toEqual([0, 1, 0, 0, 0, 0, 1, 0])
  })

  test("parses neighboring cells correctly 2", () => {
    const { seed } = blinker

    expect(parseNeighbors(0, 1, seed)).toEqual([0, 1, 1, 0, 1])
  })

  test("gets next state of cell correctly", () => {
    const { seed } = blinker

    expect(cellLives(1, parseNeighbors(1, 0, seed))).toBe(false)
  })

  test("gets next state of cell correctly 2", () => {
    const { seed } = blinker

    expect(cellLives(1, parseNeighbors(1, 1, seed))).toBe(true)
  })

  test("gets next state of cell correctly 3", () => {
    const { seed } = blinker

    expect(cellLives(0, parseNeighbors(0, 1, seed))).toBe(true)
  })

  test("gets next gen of seed correctly", () => {
    const { seed, next } = blinker

    expect(nextGen(seed)).toEqual(next)
  })

  test("gets next gen of seed correctly 2", () => {
    const { seed, next } = toad

    expect(nextGen(seed)).toEqual(next)
  })

  test("gets next gen of seed correctly 3", () => {
    const { seed, next } = glider

    expect(nextGen(seed)).toEqual(next)
  })
})
