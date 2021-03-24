import { Provider } from "../context"
import Header from "../header"
import Grid from "../grid"
import Controls from "../controls"

import "../../styles/index.css"
import "./app.css"

const App = () => (
  <Provider>
    <main className="app">
      <Header />
      <Grid />
      <Controls />
    </main>
  </Provider>
)

export default App
