import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../components/ProductCard.css"

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log("productcard productQuantity", productQuantity);
    return (
        <div>
            <div className='productCard'>
                <div >
                    <a  href="Airpods">
                       <div className='productcardinfo'> {product.title} <br />
                        ${product.price} <br />
                       </div>
                        <img className='productcardimage' width="100" src={product.img} alt="imagec" />
                    </a>
                </div>
                {productQuantity > 0 ?

                    <div>
                        {productQuantity}
                        <button onClick={() => cart.addOneToCart(product.id)} >+</button>
                        <button onClick={() => cart.removeOneFromCart(product.id)} >-</button>
                        <button onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</button>
                    </div>
                    :
                    <button onClick={() => cart.addOneToCart(product.id)}>Add To Cart</button>
                }
            </div>

        </div>
    )
}

export default ProductCard;