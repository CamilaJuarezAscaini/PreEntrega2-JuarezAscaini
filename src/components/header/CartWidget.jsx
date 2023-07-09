import carrito from '../../assets/img/carritoLogo.png'
import './styles.css';

const CartWidget = () => {
    return (
        <div >
            <ul className='CartWidget'>
            <li><img src={carrito} alt="carritoLogo" className="carrito" /></li>
            <li className='numFijo'><h6>0</h6></li>
            </ul>
        </div>

    )
}

export default CartWidget;