import { useState, useEffect } from "react"
import { nextGen } from "../algo/gol"
import { GAME_TICK_SPEED } from "../constants"

const useGame = (seed) => {
  const [game, setGame] = useState({
    state: seed,
    paused: false
  })

  useEffect(() => {
    const { state, paused } = game
    const tick = setInterval(
      () => setGame({ state: nextGen(state), paused: false }),
      GAME_TICK_SPEED
    )

    if (paused) {
      clearInterval(tick)
    }

    return () => clearInterval(tick)
  })

  return { game, setGame }
}

export default useGame
