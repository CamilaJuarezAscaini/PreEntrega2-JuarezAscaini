// VISTA PRODUCTO POR CATEGORIA

import './styles.css'
import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../../components/loader';
import Card from '../../components/products/card/ItemListContainer';



function ProductsCategories() {
    const { category } = useParams();
    const urlProductCategory = `${API_URLS.PRODUCTS.url}/${category}`
    const { data, loading, error } = useFetch(urlProductCategory, API_URLS.PRODUCTS.config);
    const navigate = useNavigate();
    const history = window.history;

    const onShowDetails = (name) => {
        navigate(`/category/${name}`)
      }


    return (
        <>
            <div className='headerCategoryContainer'>
                {history.length > 2 ? (<button onClick={() => navigate(-1)} className='backButton'> &#8592; Back</button>) : null}
                <h2 >Products Category </h2>
            </div>
            <div className='cardContainer'>
                {loading && <Loader />}
                {error && console.error(error)
                }
                {
                    data.map((product) => (
                        <Card {...product} onShowDetails={onShowDetails} />
                    ))
                }
            </div>
        </>
    )

}

export default ProductsCategories

