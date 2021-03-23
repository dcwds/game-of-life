import React, { useContext } from "react"
import { GameContext } from "../context"

import Cell from "../cell"

const Grid = () => {
  const { game } = useContext(GameContext)

  return (
    <div className="select-none">
      {game.map((row, yIdx) => (
        <div className="flex" key={yIdx}>
          {row.map((cell, idx) => (
            <Cell key={`${yIdx}-${idx}`} living={cell === 1 ? true : false} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid
