import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(productQuantity);
    return (

        <div>  <a href="Airpods">
            {product.title} <br />
            ${product.price} <br />
            <img width="100" src={product.img} alt="imagec" />
        </a>
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

    )
}

export default ProductCard;