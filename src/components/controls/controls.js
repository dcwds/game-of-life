import NewGameButton from "./new-game-button"
import NextGenButton from "./next-gen-button"
import PauseButton from "./pause-button"

import "./controls.css"

const Controls = () => (
  <ul className="controls">
    <li>
      <PauseButton />
    </li>
    <li>
      <NextGenButton />
    </li>
    <li className="flex-1 text-right">
      <NewGameButton />
    </li>
  </ul>
)

export default Controls
