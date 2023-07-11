import './styles.css'
import Counter from '../../counter'
import { useState } from 'react'


const Details = ({ id, image, name, category, description, price, onAddToCart, onShowDetails }) => {

    const [counter, setCounter] = useState(0);
    const isValidCounter = counter > 0;

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter = () => {
        if (!isValidCounter) return;
        setCounter((prevCounter) => prevCounter - 1);
    }

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
                <Counter counter={counter} onDecrementCounter={decrementCounter} onIncrementCounter={incrementCounter} isValidCounter={isValidCounter} />
            </div>
            </div>
            
        </div>
    )
}


export default Details;