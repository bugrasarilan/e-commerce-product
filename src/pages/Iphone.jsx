import React from 'react'
import img4 from "../images/image-4.jpg"
import { productsArray } from '../productsStore';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
function Iphone() {
  const product = productsArray;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <div>
     <button> <Link to="/">back to page  </Link></button>
      <h1> Iphone sayfası!</h1>
      {productsArray && <p> {(productsArray[2].title)}</p>}
      <img width="90" src={img4} />
      {productsArray[2].title}
      {productsArray && <p>price:{(productsArray[2].price)}$</p>}
      <div>

        <button onClick={() => cart.addOneToCart(productsArray[2].id)} >+</button>
        <button onClick={() => cart.removeOneFromCart(productsArray[2].id)} >-</button>
        <button onClick={() => cart.deleteFromCart(productsArray[2].id)}>Remove from cart</button>
        <button onClick={() => cart.addOneToCart(productsArray[2].id)}>Add To Cart</button>
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

export default Iphone