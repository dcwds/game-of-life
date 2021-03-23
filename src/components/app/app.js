import { Provider } from "../context"
import Grid from "../grid"

import "../../styles/index.css"

const App = () => (
  <Provider>
    <main className="flex flex-col max-w-screen-md m-0 ml-auto mr-auto">
      <header>
        <h1>Game of Life</h1>
      </header>

      <Grid />
    </main>
  </Provider>
)

export default App
