// VISTA PRODUCTO POR CATEGORIA

import './styles.css'

function ProductsCategories(){

}

export default ProductsCategories
// function ProductDetail() {
//     const { productId } = useParams();
//     const navigate = useNavigate();
//     const urlProductDetail = `${API_URLS.PRODUCTS.url}/${productId}`
//     const { data, loading, error } = useFetch(urlProductDetail, API_URLS.PRODUCTS.config);
//     const history = window.history;

//     return (
//         <>
//             <div className='headerDetailContainer'>
//                 {history.length > 2 ? (<button onClick={() => navigate(-1)} className='backButton'> &#8592; Back</button>) : null}
//                 <h2 >Product Detail</h2>
//             </div>
//             {loading && (
//                 <div className='loaderContainer'>
//                     <Loader />
//                 </div>)}
//             {error && <h2>Oops! Algo salió mal</h2>}
//             <Details {...data} />
//         </>
//     )
// }
