import './App.css'
import Description from './pages/Description'
import Pokemones from './pages/Pokemones'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemones />} />
        <Route path="/pokemon/:name" element={<Description/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
