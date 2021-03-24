import "./header.css"

const Header = () => (
  <header className="mt-4 mb-8">
    <h1 className="mb-4">Game of Life</h1>

    <p>
      A depiction of{" "}
      <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
        Conway's Game of Life
      </a>{" "}
      using <a href="https://create-react-app.dev/">Create React App</a> and{" "}
      <a href="https://tailwindcss.com">Tailwind</a>.
    </p>
  </header>
)

export default Header
