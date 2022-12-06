import { CartContext } from '../CartContext';
import { useContext } from 'react';
import "../components/ProductCard.css"
import { useState } from 'react';

function ProductCard(props) { // props product
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    // const title =product.title
    console.log("productcard productQuantity", productQuantity);
    // const [iconID1, setIconID2] = useState(); 

    // const GetIcon1 = () => {
    //     switch (product.id) { 
    //       case "1":
    //         return <a href='Airpods'>Git </a>
    
    //       case "Clouds":
    //         return 
    
    //       case "Rain":
    //         return 
    
    //       case "Thunderstorm":
    //         return // <img src={require(`../../images/11d.png`)} alt="Thunderstorm"></img>
    
    //       default:
    
    //         break;
    //     }
    //   };
// console.log(product.id)

    return (
        <div> 
            <div > 
                <div>
         
                       <div className='productcardinfo'> {product.title} <br />
                        ${product.price} <br />
                       </div>
                        <img className='productcardimage' width="100" src={product.img} alt="imagec" />
                
                </div>
                <div className='productscount'>
                {productQuantity > 0 ?

                    <div>
                        {productQuantity}
                        <button className='buttoncount' onClick={() => cart.addOneToCart(product.id)} >+</button>
                        <button className='buttoncount' onClick={() => cart.removeOneFromCart(product.id)} >-</button>
                        <button className='buttondelet' onClick={() => cart.deleteFromCart(product.id)}>delete</button>
                       
                    </div>
                    :
                    <button className='buttonadd' onClick={() => cart.addOneToCart(product.id)}>Add to basket</button>
                    
                }
                </div>
            </div>

        </div>
    )
}

export default ProductCard;