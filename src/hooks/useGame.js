import { useState, useEffect } from "react"
import { nextGen } from "../algo/gol"

const useGame = (seed) => {
  const [game, setGame] = useState({
    state: seed,
    paused: false
  })

  useEffect(() => {
    const { state, paused } = game
    const tick = setInterval(
      () => setGame({ state: nextGen(state), paused: false }),
      100
    )

    if (paused) {
      clearInterval(tick)
    }

    return () => clearInterval(tick)
  })

  return [game, setGame]
}

export default useGame
