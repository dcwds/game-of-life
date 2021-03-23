const Cell = ({ living }) => (
  <div className={"w-4 h-4 " + (living ? "bg-purple-600" : "")}></div>
)

export default Cell
