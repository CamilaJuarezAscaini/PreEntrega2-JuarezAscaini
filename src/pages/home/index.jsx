import './styles.css'
import Card from '../../components/products/card/ItemListContainer'
import Loader from '../../components/loader'
import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants/index'
import { useNavigate } from 'react-router-dom'
import Slider from '../../components/slider'


function Home() {
  const navigate = useNavigate();
  const { data: products, loading: loadingProducts, error: errorProducts } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);
  const { data: categories, loading: loadingCategories, error: errorCategories } = useFetch(API_URLS.CATEGORIES.url, API_URLS.CATEGORIES.config);


  const onShowDetails = (id) => {
    navigate(`/products/${id}`)
  }



  return (
    <>
      <div className='categoriesContainer'>
        {loadingCategories && <Loader />}
        {errorCategories && <h2>Oops! Algo salió mal</h2>}
        <Slider>
          {
            categories.map((category) => (
              <div key={category.id} className='categoryContainer'>
                <p className='categoryName'>{category.name}</p>
              </div>
            ))
          }
        </Slider>

      </div>
      <div className='cardContainer'>
        {loadingProducts && <Loader />}
        {errorProducts && <h2>Oops! Algo salió mal</h2>}
        {
          products.map((product) => (
            <Card key={product.id} {...product} onShowDetails={onShowDetails} />
          ))
        }
      </div>

    </>
  )
}

export default Home
