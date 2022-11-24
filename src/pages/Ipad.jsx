import React from 'react'
import img3 from "../images/image-3.jpg"
import { productsArray } from '../productsStore';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import "./productpages.css"

function Ipad() {
  const product = productsArray;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.quantity);
  console.log(cart.items);
  return (

    <div  >
     <Link to="/"><button className='buttoncount' >Back to page </button></Link> 
    
      <h1> Ipad </h1>



      <div className='pagesview'>
        <img className='productpagesimage' src={img3} alt="Macbook" />
        <div className='productinfo'>
          {productsArray[1].title}
          {productsArray && <p>price:{(productsArray[1].price)}$</p>}
          <div className='pagebutton'>
            <button className='buttoncount' onClick={() => cart.addOneToCart(productsArray[1].id)} >+</button>
            <button className='buttoncount' onClick={() => cart.removeOneFromCart(productsArray[1].id)} >-</button>
            <button className='buttondelet' onClick={() => cart.deleteFromCart(productsArray[1].id)}>Remove from cart</button>
            <button className='buttonadd' onClick={() => cart.addOneToCart(productsArray[1].id)}>Add To Cart</button>
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

export default Ipad