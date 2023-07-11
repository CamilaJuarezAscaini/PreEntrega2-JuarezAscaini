import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/header/NavBar'
import Card from './components/products/card'
import Details from './components/products/details';


function App() {

  const [products, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [productDetail, setProductDetail] = useState(null)


  const onShowDetails = (id) => {
    setShowDetails(true);
    const findProduct = products.find((product) => product.id === id);
    setProductDetail(findProduct);
  }


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
      <>
        {showDetails ? (
          <>
            <div className='headerDetailContainer'>
              {/* NO FUNCIONA */}
              {/* <button onClick={() => setShowDetails(false)} className='backButton'>Back</button> */}
              <h2 >Product Detail</h2>
            </div>
            <Details {...productDetail} />
          </>
        ) : (
          <div className='cardContainer'>
            {
              products.map((product) => (
                <Card {...product} onShowDetails={onShowDetails} />
              ))
            }
          </div>
        )}

      </>


    </div >
  )
}

export default App
