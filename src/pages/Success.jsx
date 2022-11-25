import React from 'react'
import { productsArray } from '../productsStore';
import { Link } from 'react-router-dom';
import "../pages/Success.css"

import img1 from "../images/image-1.jpg"
import img2 from "../images/image-2.jpg"
import img3 from "../images/image-3.jpg"
import img4 from "../images/image-4.jpg"
function Success() {

  return (
    <div className='Successpageview'>
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
        <Link to="AirPods">
          {(productsArray[0].title)}
          <img className='homeimage' width="200" height="150" src={img2} />
          {<p>price:{(productsArray[0].price)}$</p>}</Link>
      </div>

      <div>
        <Link to="Ipad">
          {(productsArray[1].title)}
          <img className='homeimage' width="200" height="150" src={img3} />
          {<p>price: {(productsArray[1].price)}$</p>}</Link>
      </div>

      <div>
        <Link to="Iphone">
          {(productsArray[2].title)}
          <img className='homeimage' width="200" height="150" src={img4} />
          {<p>price:{(productsArray[2].price)}$</p>}</Link>
      </div>

      <div>
        <Link to="MacBook">
          {(productsArray[3].title)}
          <img className='homeimage' width="200" height="150" src={img1} />
          {<p>price: {(productsArray[3].price)}$</p>}</Link>
      </div>
    </div>

  )
}

export default Success