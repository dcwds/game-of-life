import "./cell.css"

const Cell = ({ living }) => (
  <div aria-label="cell" className={"cell " + (living ? "bg-purple-400" : "bg-gray-800")}></div>
)

export default Cell
