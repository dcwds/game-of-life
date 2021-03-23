import { Provider } from "../context"
import Grid from "../grid"

import "../../styles/index.css"

const App = () => (
  <Provider>
    <main className="font-sans">
      <header>
        <h1>Game of Life</h1>
      </header>

      <Grid />
    </main>
  </Provider>
)

export default App
