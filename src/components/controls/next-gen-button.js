import { useContext } from "react"
import { GameContext } from "../context"
import { nextGen } from "../../algo/gol"

const NextGenButton = () => {
  let {
    game: { state, paused },
    setGame
  } = useContext(GameContext)

  return (
    <button
      className="btn btn--stroke"
      onClick={() => setGame({ state: nextGen(state), paused })}
    >
      Next Step
    </button>
  )
}

export default NextGenButton
