const Cell = ({ living }) => (
  <div
    className={
      "p-2 border border-solid border-gray-800 " +
      (living ? "bg-gray-400" : "bg-gray-700")
    }
  ></div>
)

export default Cell
