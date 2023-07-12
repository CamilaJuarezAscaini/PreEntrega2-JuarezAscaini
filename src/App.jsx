import './App.css'
import NavBar from './components/header/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'


function App() {
  return (
    <div>
      <NavBar logo="MonsterMarket" />
      <Routes>
        <Route path='/' element={<Home/>}/> 
      </Routes>
    </div >
  )
}

export default App
