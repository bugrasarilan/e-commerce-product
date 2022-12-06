import React from 'react'
import img1 from "../images/image-1.jpg"
import { productsArray } from '../productsStore';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
function Macbook() {
  const cart = useContext(CartContext);
  console.log(cart.items);
  return (
    <div className='productpages'>

<Link to="/"><button className='buttoncount' >Back to page </button></Link>      
   <h1> Macbook </h1>
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