import React from "react";
import img2 from "../images/image-2.jpg";
import { productsArray } from "../productsStore";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import "./productpages.css";

function Airpods() {
  const cart = useContext(CartContext);
  console.log("cart.items", cart.items);
  return (
    <div className="productpages">
      <Link to="/">
        <button className="buttoncount">Back to page </button>
      </Link>
      <h1 style={{ display: "flex", justifyContent: "center" }}> AirPods </h1>
      <div className="pagesview">
        <img className="productpagesimage" src={img2} alt="Macbook" />
        <div className="productinfo">
          {productsArray[0].title}

          {productsArray && <p>price:{productsArray[0].price}$</p>}
          <div className="pagebutton">
            <button
              className="buttoncount"
              onClick={() => cart.addOneToCart(productsArray[0].id)}
            >
              +
            </button>
            <button
              className="buttoncount"
              onClick={() => cart.removeOneFromCart(productsArray[0].id)}
            >
              -
            </button>
            <button
              className="buttonadd"
              onClick={() => cart.addOneToCart(productsArray[0].id)}
            >
              Add
            </button>
            <button
              className="buttondelet"
              onClick={() => cart.deleteFromCart(productsArray[0].id)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
      <h1 style={{ color: "black", display: "flex", justifyContent: "center" }}>
        Other product
      </h1>
      <div className="productCard">
        {productsArray.map((product, idx) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Airpods;
