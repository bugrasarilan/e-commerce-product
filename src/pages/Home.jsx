import React from 'react'
import { productsArray } from '../productsStore';
import { Link } from 'react-router-dom';
import "../pages/Home.css"

import img1 from "../images/image-1.jpg"
import img2 from "../images/image-2.jpg"
import img3 from "../images/image-3.jpg"
import img4 from "../images/image-4.jpg"
function Home() {

  return (
    <div className='Successpageview'>     
      <div>
        <Link className='productlink' to="AirPods">
          {(productsArray[0].title)}
          <img className='homeimage' width="200" height="150" src={img2} alt="airpods "  />
          {<p>price:{(productsArray[0].price)}$</p>}</Link>
      </div>

      <div>
        <Link className='productlink' to="Ipad">
          {(productsArray[1].title)}
          <img className='homeimage' width="200" height="150" src={img3} alt="Ipad " />
          {<p>price: {(productsArray[1].price)}$</p>}</Link>
      </div>

      <div>
        <Link className='productlink' to="Iphone">
          {(productsArray[2].title)}
          <img className='homeimage' width="200" height="150" src={img4} alt="IPhone"  />
          {<p>price:{(productsArray[2].price)}$</p>}</Link>
      </div>

      <div>
        <Link className='productlink' to="MacBook">
          {(productsArray[3].title)}
          <img className='homeimage' width="200" height="150" src={img1} alt="Macbook" />
          {<p>price: {(productsArray[3].price)}$</p>}</Link>
      </div>
    </div>

  )
}

export default Home