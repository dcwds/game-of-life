import { act, renderHook } from "@testing-library/react-hooks"
import useGame from "./useGame"
import { blinker } from "../algo/seeds"
import { GAME_TICK_SPEED } from "../constants"

describe("useGame", () => {
  it("sets state from hook param and changes state on game tick", () => {
    const { result } = renderHook(() => useGame(blinker.seed))

    expect(result.current.game.state).toEqual(blinker.seed)

    act(() => jest.advanceTimersByTime(GAME_TICK_SPEED))

    expect(result.current.game.state).toEqual(blinker.next)
  })

  it("does not update state when game is paused", () => {
    const { result } = renderHook(() => useGame(blinker.seed))

    expect(result.current.game.state).toEqual(blinker.seed)

    act(() => {
      result.current.setGame({ state: result.current.game.state, paused: true })
      jest.advanceTimersByTime(GAME_TICK_SPEED)
    })

    expect(result.current.game.state).not.toEqual(blinker.next)
  })
})
