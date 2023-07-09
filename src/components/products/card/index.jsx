import './styles.css'
import Counter from '../../counter'
import { useState } from 'react'


const Card = ({ id, image, name, category, description, price, onAddToCart }) => {

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
        <div key={id} className='card'>
            <img className='cardImage' src={image} alt={name} />
            <div className='cardContent'>
                <h3 className='cardName'>{name}</h3>
                <p className='cardCategory'>{category}</p>
                <p className='cardDescription'>{description}</p>
                <p className='cardPrice'>${price}</p>
            </div>
            <div className='cardActions'>
                <button onClick={onAddToCart} className='cardButton'>Añadir al carrito</button>
                <Counter counter={counter} onDecrementCounter={decrementCounter} onIncrementCounter={incrementCounter} isValidCounter={isValidCounter} />
            </div>
        </div>
    )
}


export default Card;