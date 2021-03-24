import React, { createContext } from "react"
import useGame from "../hooks/useGame"
import randomSeed from "../utils/randomSeed"
import { GAME_SIZE } from "../constants"

const GameContext = createContext({
  game: randomSeed(GAME_SIZE, GAME_SIZE),
  setGame: () => {}
})

const Provider = ({ children }) => {
  const [game, setGame] = useGame(randomSeed(GAME_SIZE, GAME_SIZE))

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, Provider }
