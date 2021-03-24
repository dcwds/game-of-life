import NewGameButton from "./new-game-button"
import NextGenButton from "./next-gen-button"
import PauseButton from "./pause-button"

const Controls = () => (
  <div className="flex justify-between mt-8">
    <PauseButton />
    <NextGenButton />
    <NewGameButton />
  </div>
)

export default Controls
