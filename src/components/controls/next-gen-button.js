import { useContext } from "react"
import { GameContext } from "../context"
import { nextGen } from "../../algo/gol"

const NextGenButton = () => {
  const {
    game: { state, paused },
    setGame
  } = useContext(GameContext)

  return (
    <button
      data-testid="next-gen button"
      className="btn btn--stroke"
      onClick={() => setGame({ state: nextGen(state), paused })}
    >
      Next Step
    </button>
  )
}

export default NextGenButton
