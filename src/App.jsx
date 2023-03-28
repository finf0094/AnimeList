import Cards from "./components/Cards/Cards"
import NavHeader from "./components/header/NavHeader"
import Search from "./components/search/Search"

import './app.css'

function App() {
 
  return (
    <div className="App">
      <NavHeader/>
      <Search />
      <Cards />
    </div>
  )
}

export default App
