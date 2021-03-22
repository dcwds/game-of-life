import { Provider } from "../provider"
import Grid from "../grid"

import "tailwindcss/tailwind.css"

const App = () => (
  <Provider>
    <main class="font-sans">
      <header>
        <h1>Game of Life</h1>
      </header>

      <Grid />
    </main>
  </Provider>
)

export default App
