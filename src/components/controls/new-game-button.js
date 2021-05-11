import { useContext } from "react"
import { GameContext } from "../context"
import randomSeed from "../../utils/randomSeed"
import { GAME_SIZE } from "../../constants"

const NewGameButton = () => {
  const {
    game: { paused },
    setGame
  } = useContext(GameContext)

  return (
    <button
      data-testid="new-game-button"
      className="btn btn--fill px-6"
      onClick={() =>
        setGame({ state: randomSeed(GAME_SIZE, GAME_SIZE), paused })
      }
    >
      New Game
    </button>
  )
}

export default NewGameButton
