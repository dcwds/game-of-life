import React, { useContext, useEffect } from "react"
import { GameContext } from "../context"

import Cell from "../cell"
import { nextGen } from "../../algo/gol"

const Grid = () => {
  const { game, setGame } = useContext(GameContext)

  useEffect(() => {
    const tick = setInterval(() => setGame(nextGen(game)), 200)

    return () => clearInterval(tick)
  })

  return game.map((row, yIdx) => (
    <div className="flex" key={yIdx}>
      {row.map((cell, idx) => (
        <Cell key={`${yIdx}-${idx}`} living={cell === 1 ? true : false} />
      ))}
    </div>
  ))
}

export default Grid
