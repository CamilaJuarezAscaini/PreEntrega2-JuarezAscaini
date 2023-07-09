import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/header/NavBar'
import Card from './components/products/card'


function App() {

  const [products, setProducts] = useState([]);



  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://64a1e8ee0079ce56e2db79ff.mockapi.io/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setProducts(data);
      } catch (error) {

      }
    }
    getProducts();
  }, [])



  return (
    <div>
      <NavBar logo="MonsterMarket" />

      <div className='cardContainer'>
        {
          products.map((product) => (
            <Card {...product} />
          ))
        }
      </div>

    </div>
  )
}

export default App
