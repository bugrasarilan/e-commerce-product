import React from 'react'
import img2 from "../images/image-2.jpg"
import { productsArray } from '../productsStore';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import "./productpages.css"

function Airpods() {
    console.log(productsArray)

    const product = productsArray;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log("cart.items", cart.items);
    return (
        <div>
              <Link to="/"><button className='buttoncount' >Back to page </button></Link> 
            <h1> AirPods </h1>


           
      <div className='pagesview'>
        <img className='productpagesimage' src={img2} alt="Macbook" />
        <div className='productinfo'>
          {productsArray[0].title}
          {productsArray && <p>price:{(productsArray[0].price)}$</p>}
          <div className='pagebutton'>
            <button className='buttoncount'  onClick={() => cart.addOneToCart(productsArray[0].id)} >+</button>
            <button className='buttoncount'  onClick={() => cart.removeOneFromCart(productsArray[0].id)} >-</button>
            <button className='buttondelet'  onClick={() => cart.deleteFromCart(productsArray[0].id)}>Remove from cart</button>
            <button className='buttonadd'  onClick={() => cart.addOneToCart(productsArray[0].id)}>Add To Cart</button>
          </div>
        </div>
      </div>

       
            




            <h1 >other product</h1>
            <div className='store'>
                {productsArray.map((product, idx) => (
                    <ProductCard product={product} />
                ))}
            </div>


        </div >
    )
}

export default Airpods