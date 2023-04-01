import { Route, Routes } from "react-router-dom"

import NavHeader from "./components/header/NavHeader"
import Search from "./components/search/Search"
import Cards from "./components/Cards/Cards"
import AnimeInfo from "./components/animeInfo/animeInfo"

import './app.css'
import DescendingFilter from "./components/Cards/filtersPage/DescendingFilter"


function App() {
 
  return (
    <div className="App">
      <NavHeader/>
      <Search />
      <Routes>
        <Route path="/anime" element={<Cards />}/>
        <Route path="/anime/filter/:filterParam" element={<DescendingFilter />}/>
        <Route path="/anime/:id" element={<AnimeInfo />}/>
      </Routes>
    </div>
  )
}

export default App
