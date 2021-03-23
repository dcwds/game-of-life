import "./cell.css"

const Cell = ({ living }) => (
  <div className={"cell " + (living ? "bg-gray-400" : "bg-gray-700")}></div>
)

export default Cell
