import React, { createContext, useState } from "react"
import randomSeed from "../utils/randomSeed"

const GameContext = createContext({
  game: randomSeed(35, 35),
  setGame: () => {}
})

const Provider = ({ children }) => {
  const [game, setGame] = useState(randomSeed(35, 35))

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, Provider }
