import React, { useContext } from "react"
import { GameContext } from "../context"

import Cell from "../cell"

import "./grid.css"

const Grid = () => {
  const {
    game: { state }
  } = useContext(GameContext)

  return (
    <div className="grid" data-testid="grid">
      {state.map((row, yIdx) => (
        <div className="row" key={yIdx}>
          {row.map((cell, idx) => (
            <Cell key={`${yIdx}-${idx}`} living={cell === 1 ? true : false} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid
