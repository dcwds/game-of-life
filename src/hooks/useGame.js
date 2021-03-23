import { useState, useEffect } from "react"
import { nextGen } from "../algo/gol"

const useGame = (seed) => {
  const [game, setGame] = useState(seed)

  useEffect(() => {
    const tick = setInterval(() => setGame(nextGen(game)), 100)

    return () => clearInterval(tick)
  })

  return [game, setGame]
}

export default useGame
