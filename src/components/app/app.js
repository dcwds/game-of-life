import { Provider } from "../context"
import Header from "../header"
import Grid from "../grid"

import "../../styles/index.css"
import "./app.css"

const App = () => (
  <Provider>
    <main className="app">
      <Header />
      <Grid />
    </main>
  </Provider>
)

export default App
