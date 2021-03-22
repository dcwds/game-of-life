import React, { createContext } from "react"
import { blinker } from "../algo/seeds"

const GameContext = createContext(blinker.seed)

const Provider = ({ children }) => (
  <GameContext.Provider value={blinker.seed}>{children}</GameContext.Provider>
)

export { GameContext, Provider }
