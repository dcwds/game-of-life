import React, { useContext } from "react"
import { GameContext } from "../provider"

import Cell from "../cell"

const Grid = () => {
  const seed = useContext(GameContext)

  return seed.map((row, yIdx) => (
    <div key={yIdx}>
      {row.map((cell, idx) => (
        <Cell key={`${yIdx}-${idx}`} />
      ))}
    </div>
  ))
}

export default Grid
