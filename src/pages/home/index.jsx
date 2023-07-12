import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/products/card'
import Details from '../../components/products/details'
import Loader from '../../components/loader'
import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants/index'



function Home() { 

  const [showDetails, setShowDetails] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const { data, loading, error } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);


  const onShowDetails = (id) => {
    setShowDetails(true);
    const findProduct = data.find((product) => product.id === id);
    setProductDetail(findProduct);
  }



  return (
    <div>
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
            {loading && <Loader />}
            {error && <h2>Oops! Algo salió mal</h2>}
            {
              data.map((product) => (
                <Card key={product.id} {...product} onShowDetails={onShowDetails} />
              ))
            }
          </div>
        )}

      </>


    </div >
  )
}

export default Home
