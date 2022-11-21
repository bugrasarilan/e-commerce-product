import React from 'react'
import img3 from "../images/image-3.jpg"
import { productsArray } from '../productsStore';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function Ipad() {
  const product = productsArray;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.quantity);
  console.log(cart.items);
  return (

    <div>
      <button><Link to="/">back to page  </Link> </button>
      <h1> Ipad sayfası!</h1>
     
      {productsArray && <p> {(productsArray[1].title)}</p>}
      <img width="90" src={img3} />
      {productsArray[1].title}
      {productsArray && <p>price: {(productsArray[1].price)}$</p>}

      <div>

        <button onClick={() => cart.addOneToCart(productsArray[1].id)} >+</button>
        <button onClick={() => cart.removeOneFromCart(productsArray[1].id)} >-</button>
        <button onClick={() => cart.deleteFromCart(productsArray[1].id)}>Remove from cart</button>
        <button onClick={() => cart.addOneToCart(productsArray[1].id)}>Add To Cart</button>
      </div>

      <h1 >Welcome to the store!</h1>
      <div className='store'>
        {productsArray.map((product, idx) => (
          <ProductCard product={product} />
        ))}
      </div>

    </div>
  )
}

export default Ipad