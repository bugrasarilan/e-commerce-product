import React from 'react'
import img2 from "../images/image-2.jpg"
import { productsArray } from '../productsStore';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function Airpods() {
    console.log(productsArray)

    const product = productsArray;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log("cart.items", cart.items);
    return (
        <div>
          <button> <Link to="/">back to page  </Link></button> 
            <h1> AirPods sayfası!</h1>


            <div className='pagesview'>
                <div> <img width="90" src={img2} />
                    {(productsArray[0].title)}
                    {/* {productsArray[0].title} */}
                    {productsArray && <p>price: {(productsArray[0].price)}$</p>}
                    {/* {productsArray[0].title ((product, idx) => ( */}
                </div>  
                 </div>

            <div className='pagebutton'>

                <button onClick={() => cart.addOneToCart(productsArray[0].id)} >+</button>
                <button onClick={() => cart.removeOneFromCart(productsArray[0].id)} >-</button>
                <button onClick={() => cart.deleteFromCart(productsArray[0].id)}>Remove from cart</button>
                <button onClick={() => cart.addOneToCart(productsArray[0].id)}>Add To Cart</button>
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