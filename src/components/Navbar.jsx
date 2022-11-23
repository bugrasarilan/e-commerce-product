import { Button, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';
import "../components/Navbar.css"


function NavbarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <header className='navbar' >
                 <Link to="/">  <h1 className='header'>Ecommerce Store</h1></Link>
                <div className='linkbutton' >
                   
                    <button className='button' ><Link className='button' to="/">Home </Link></button>
                    <button className='button' > <Link className='button' to="Airpods">Airpods </Link></button>
                    <button className='button'>  <Link className='button' to="Ipad">Ipad </Link></button>
                    <button className='button'>  <Link className='button' to="Iphone">Iphone </Link></button>
                    <button  className='button'> <Link className='button' to="Macbook">Macbook </Link></button>
 
                </div>
                <button className='basket' onClick={handleShow}> {productsCount} product</button>
            </header>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>

                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <a href='Pay'>
                                <Button variant="success">
                                   Buy products
                                </Button>
                            </a>

                        </>
                        :
                        <h1>
                        No product, your cart is empty!</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;