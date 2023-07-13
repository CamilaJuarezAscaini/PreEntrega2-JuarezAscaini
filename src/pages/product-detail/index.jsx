// VISTA PRODUCTO INDIVIDUAL

import './styles.css'
import Details from '../../components/products/details';
import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/loader';

function ProductDetail() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const urlProductDetail = `${API_URLS.PRODUCTS.url}/${productId}`
    const { data, loading, error } = useFetch(urlProductDetail, API_URLS.PRODUCTS.config);
    const history = window.history;

    return (
        <>
            <div className='headerDetailContainer'>
                {history.length > 2 ? (<button onClick={() => navigate(-1)} className='backButton'> &#8592; Back</button>) : null}
                <h2 >Product Detail</h2>
            </div>
            {loading && (
                <div className='loaderContainer'>
                    <Loader />
                </div>)}
            {error && <h2>Oops! Algo salió mal</h2>}
            <Details {...data} />
        </>
    )
}

export default ProductDetail