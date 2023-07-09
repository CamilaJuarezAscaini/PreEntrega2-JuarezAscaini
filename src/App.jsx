import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/header/NavBar'
import Greeting from './components/products/ItemListContainer'
import Counter from './components/counter';



function App() {
  const [counter, setCounter] = useState(0);
  const isValidCounter = counter > 0;
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    if (!isValidCounter) return;
    setCounter((prevCounter) => prevCounter - 1);
  }



  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('./component/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setProducts(data)

      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, [])

  console.log([products])

  return (
    <div>
      <NavBar logo="MonsterMarket" />
      <Greeting />
      <Counter counter={counter} onDecrementCounter={decrementCounter} onIncrementCounter={incrementCounter} isValidCounter={isValidCounter}/>
    </div>
  )
}

export default App
