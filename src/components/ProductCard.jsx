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
                        <button className='buttoncount' onClick={() => cart.addOneToCart(product.id)} >+</button>
                        <button className='buttoncount' onClick={() => cart.removeOneFromCart(product.id)} >-</button>
                        <button className='buttondelet' onClick={() => cart.deleteFromCart(product.id)}>delete</button>
                    </div>
                    :
                    <button className='buttonadd' onClick={() => cart.addOneToCart(product.id)}>Add to basket</button>
                }
            </div>

        </div>
    )
}

export default ProductCard;