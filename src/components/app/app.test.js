import { fireEvent, render, screen, within } from "@testing-library/react"
import App from "./app"
import randomSeed from "../../utils/randomSeed"
import { blinker, beeHive } from "../../algo/seeds"
import { GAME_TICK_SPEED } from "../../constants"

jest.mock("../../utils/randomSeed")

describe("app", () => {
  // There may be a better way to target living/dead cells. This was a quick solution.
  const getCellStates = (cells) =>
    cells.map((c) => {
      const cellState = c.getAttribute("aria-label").replace(/\scell/i, "")

      return cellState === "living" ? 1 : 0
    })

  beforeEach(() => {
    randomSeed.mockReturnValue(blinker.seed)
    render(<App />)
  })

  it("renders grid and starts game automatically with blinker seed", () => {
    const grid = screen.getByTestId("grid")
    const cells = within(grid).getAllByLabelText(/cell/i)

    let cellStates = getCellStates(cells)

    expect(cellStates).toEqual(blinker.seed.flat())

    jest.advanceTimersByTime(GAME_TICK_SPEED)
    cellStates = getCellStates(cells)

    expect(cellStates).toEqual(blinker.next.flat())
  })

  it("pauses the game when the pause button is clicked and renders play button", () => {
    const grid = screen.getByTestId("grid")
    const cells = within(grid).getAllByLabelText(/cell/i)

    let cellStates = getCellStates(cells)
    expect(cellStates).toEqual(blinker.seed.flat())

    const pauseButton = screen.getByTestId("pause button")
    fireEvent.click(pauseButton)

    jest.advanceTimersByTime(GAME_TICK_SPEED)
    cellStates = getCellStates(cells)

    expect(cellStates).not.toEqual(blinker.next.flat())
    expect(screen.getByTestId("play button")).toBeInTheDocument()
  })

  it("generates next step of game when next step button is clicked", () => {
    const grid = screen.getByTestId("grid")
    const cells = within(grid).getAllByLabelText(/cell/i)

    let cellStates = getCellStates(cells)
    expect(cellStates).toEqual(blinker.seed.flat())

    const pauseButton = screen.getByTestId("pause button")
    const nextStepButton = screen.getByTestId("next-gen button")

    fireEvent.click(pauseButton)
    fireEvent.click(nextStepButton)
    cellStates = getCellStates(cells)

    expect(cellStates).toEqual(blinker.next.flat())
  })

  it("starts a new game when new game button is clicked", () => {
    const grid = screen.getByTestId("grid")
    let cells = within(grid).getAllByLabelText(/cell/i)

    let cellStates = getCellStates(cells)
    expect(cellStates).toEqual(blinker.seed.flat())

    randomSeed.mockReturnValue(beeHive.seed)
    const newGameButton = screen.getByTestId("new-game button")

    fireEvent.click(newGameButton)
    cells = within(grid).getAllByLabelText(/cell/i)
    cellStates = getCellStates(cells)

    expect(cellStates).toEqual(beeHive.seed.flat())
  })
})
