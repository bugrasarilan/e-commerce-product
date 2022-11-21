import React from 'react'
import { productsArray } from '../productsStore';
import { Link } from 'react-router-dom';

import img1 from "../images/image-1.jpg"
import img2 from "../images/image-2.jpg"
import img3 from "../images/image-3.jpg"
import img4 from "../images/image-4.jpg"
function Success() {

  return (
    <div className='store'>
      {/* ilk sayfa */}

{/* 
      {productsArray.map((product, idx) => (
        <div key={idx}>
          <Link to="store">  {product.title}<br /> </Link>
          ${product.price}<br />
          <img width="100" src={product.img} alt="imagse" />
        </div>
      ))} */}
      <div>
      <Link to="AirPods"> {productsArray && <p> {(productsArray[0].title)}</p>}
        <img width="90" src={img2} />
        {productsArray && <p>ürün fiyatı: {(productsArray[0].price)}</p>}</Link>
      </div>

      <div>
      <Link to="Ipad"> {productsArray && <p> {(productsArray[1].title)}</p>}
        <img width="90" src={img3} />
        {productsArray && <p>ürün fiyatı: {(productsArray[1].price)}</p>}</Link>
      </div>

      <div>
      <Link to="Iphone"> {productsArray && <p> {(productsArray[2].title)}</p>}
        <img width="90" src={img4} />
        {productsArray && <p>ürün fiyatı: {(productsArray[2].price)}</p>}</Link>
      </div>
      
      <div>
      <Link to="MacBook"> {productsArray && <p> {(productsArray[3].title)}</p>}
        <img width="90" src={img1} />
        {productsArray && <p>ürün fiyatı: {(productsArray[3].price)}</p>}</Link>
      </div>
    </div>

  )
}

export default Success