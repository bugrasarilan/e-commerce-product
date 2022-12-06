import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    return (
        <>
            <h3>{productData.title}</h3>
            <img width="100" src={productData.img} alt="image" />
            <p> piece:{quantity}</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <button className='buttoncount' onClick={() => cart.addOneToCart(id)} >+</button>
            <button className='buttoncount' onClick={() => cart.removeOneFromCart(id)} >-</button>
              {quantity}
            <button className='buttondelet' onClick={() => cart.deleteFromCart(id)}>delete</button>
         
        </>
    )
}

export default CartProduct;