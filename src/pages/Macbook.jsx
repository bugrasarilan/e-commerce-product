import React from 'react'
import img1 from "../images/image-1.jpg"
import { productsArray } from '../productsStore';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
function Macbook() {
  const product = productsArray;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <div className='productpages'>

<Link to="/"><button className='buttoncount' >Back to page </button></Link>       <h1> Macbook </h1>




      <div className='pagesview'>
        <img className='productpagesimage' src={img1} alt="Macbook" />
        <div className='productinfo'>
          {productsArray[3].title}
          {productsArray && <p>price:{(productsArray[3].price)}$</p>}
          <div className='pagebutton'>
            <button className='buttoncount' onClick={() => cart.addOneToCart(productsArray[3].id)} >+</button>
            <button className='buttoncount' onClick={() => cart.removeOneFromCart(productsArray[3].id)} >-</button>
            <button className='buttonadd' onClick={() => cart.addOneToCart(productsArray[3].id)}>Add</button>
            <button className='buttondelet' onClick={() => cart.deleteFromCart(productsArray[3].id)}>Delete</button>

          </div>
        </div>
      </div>




      {/* {productQuantity > 0 ? 
             
             <div>
      {productsArray[2].count =undefined ? productsArray[2].count  :   cart.items[0].quantity}  

                {productsArray[2].count = undefined ? productsArray[2].count : cart.items[0].quantity}
                <button onClick={() => cart.addOneToCart(productsArray[2].id)} >+ </button>
                <button onClick={() => cart.removeOneFromCart(productsArray[2].id)} >-</button>
                <button onClick={() => cart.deleteFromCart(productsArray[2].id)}>Delete product </button>
              </div>
              :

              <button onClick={() => cart.addOneToCart(productsArray[2].id)}>Add To Cart</button>

              }   */}







      <h1 style={{ color: 'black',display:"flex", justifyContent:'center'  }} >Other product</h1>
      <div className='productCard'>
        {productsArray.map((product, idx) => (
          <ProductCard product={product} />
        ))}
      </div>

    </div>
  )
}

export default Macbook