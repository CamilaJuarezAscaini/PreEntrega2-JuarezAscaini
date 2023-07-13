import './styles.css'


const Card = ({ id, image, name, category, description, price, onAddToCart, onShowDetails }) => {


    return (
        <div className='card' onClick={() => onShowDetails(id)}>
            <img className='cardImage' src={image} alt={name} />
            <div className='cardContent'>
                <h3 className='cardName'>{name}</h3>
                <p className='cardCategory'>{category}</p>
                <p className='cardDescription'>{description}</p>
                <p className='cardPrice'>${price}</p>
            </div>
            <div className='cardActions'>
                <button onClick={onAddToCart} className='cardButton'>Añadir al carrito</button>
            </div>
        </div>
    )
}


export default Card;