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
      onClick={() =>
        setGame({ state: randomSeed(GAME_SIZE, GAME_SIZE), paused })
      }
    >
      New Game
    </button>
  )
}

export default NewGameButton
