import React from 'react'
import img4 from "../images/image-4.jpg"
import { productsArray } from '../productsStore';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Iphone(props) {
  // const productsCount = cart.items.reduce(( product) =>  product.quantity, 0);
  const product = productsArray;
  const quantity = props.quantity;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log("cart.items", cart.items);
  console.log("productQuantity", productQuantity);

  return (
    <div>
      <button> <Link to="/">back to page  </Link></button>
      <h1> Iphone </h1>



      <div className='pagesview'>
        <img className='productpagesimage' src={img4} alt="Macbook" />
        <div className='productinfo'>
          {productsArray[2].title}
          {productsArray && <p>price:{(productsArray[2].price)}$</p>}
          <div className='pagebutton'>
            <button onClick={() => cart.addOneToCart(productsArray[2].id)} >+</button>
            <button onClick={() => cart.removeOneFromCart(productsArray[2].id)} >-</button>
            <button onClick={() => cart.deleteFromCart(productsArray[2].id)}>Remove from cart</button>
            <button onClick={() => cart.addOneToCart(productsArray[2].id)}>Add To Cart</button>
          </div>
        </div>
      </div>




      <h1 >other product</h1>
      <div className='store'>
        {productsArray.map((product, idx) => (
          <ProductCard product={product} />
        ))}
      </div>

    </div>
  )
}

export default Iphone