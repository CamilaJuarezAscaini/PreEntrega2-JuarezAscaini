import './App.css'
import NavBar from './components/header/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProductDetail from './pages/product-detail'
import ProductsCategories from './pages/categories'


function App() {
  return (
    <div>
      <NavBar logo="MonsterMarket" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/category/:categoryId' element={<ProductsCategories />} />

      </Routes>
    </div >
  )
}

export default App
