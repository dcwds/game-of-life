import React, { createContext } from "react"
import useGame from "../hooks/useGame"
import randomSeed from "../utils/randomSeed"

const GameContext = createContext({
  game: randomSeed(25, 25),
  setGame: () => {}
})

const Provider = ({ children }) => {
  const [game, setGame] = useGame(randomSeed(25, 25))

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, Provider }
