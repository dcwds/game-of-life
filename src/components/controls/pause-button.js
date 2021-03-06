import { useContext } from "react"
import { GameContext } from "../context"

const PauseButton = () => {
  const {
    game: { state, paused },
    setGame
  } = useContext(GameContext)

  return (
    <button
      data-testid={paused ? "play-button" : "pause-button"}
      className="btn btn--stroke"
      onClick={() => setGame({ state, paused: !paused })}
    >
      {paused ? "Play" : "Pause"}
    </button>
  )
}

export default PauseButton
