// DATOS PARA VISTA INDIVIDUAL DEL PRODUCTO

import './styles.css'
import Counter from '../../counter'


const Details = ({ id, image, name, category, description, price, onAddToCart }) => {

    

    return (
        <div className='cardDetail'>
            <img className='cardImageDetail' src={image} alt={name} />
            <div className='cardContentDetail'>
                <h3 className='cardNameDetail'>{name}</h3>
                <p className='cardCategoryDetail'>{category}</p>
                <p className='cardDescriptionDetail'>{description}</p>
                <p className='cardPriceDetail'>${price}</p>
                <div className='cardActionsDetail'>
                <button onClick={onAddToCart} className='cardButtonDetail'>Añadir al carrito</button>
                <Counter />
            </div>
            </div>
            
        </div>
    )
}


export default Details;