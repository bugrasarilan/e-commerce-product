import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";
import { productsArray } from '../productsStore';
function CartProduct(props) {
    const cart = useContext(CartContext);  
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    const product = productsArray;
    const productQuantity = cart.getProductQuantity(product.id);
    return (
        <>
            <h3>{productData.title}</h3>
            <img width="100" src={productData.img} alt="image" />
            <p> piece:{quantity}</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <button onClick={() => cart.deleteFromCart(id)}>Remove</button>


            
            {quantity}
                    <button onClick={() => cart.addOneToCart(id)} >+</button>
                    <button onClick={() => cart.removeOneFromCart(id)} >-</button>
            <hr></hr>
        </>
    )
}

export default CartProduct;