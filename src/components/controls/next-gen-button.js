import { useContext } from "react"
import { GameContext } from "../context"
import { nextGen } from "../../algo/gol"

const NextGenButton = () => {
  let {
    game: { state, paused },
    setGame
  } = useContext(GameContext)

  return (
    <button onClick={() => setGame({ state: nextGen(state), paused })}>
      Next Generation
    </button>
  )
}

export default NextGenButton
