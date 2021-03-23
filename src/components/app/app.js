import { Provider } from "../context"
import Header from "../header"
import Grid from "../grid"
import { PauseButton } from "../controls"

import "../../styles/index.css"
import "./app.css"

const App = () => (
  <Provider>
    <main className="app">
      <Header />
      <Grid />
      <PauseButton />
    </main>
  </Provider>
)

export default App
