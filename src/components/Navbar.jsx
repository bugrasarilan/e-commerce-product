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
    const [clicked, setClicked] = useState(false);
    const hamburgerMenu = () => {
        setClicked(!clicked);
    };

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <header className='navbar' >
                <Link to="/">  <h1 className='header'>Products list</h1></Link>
                <div className="hamburger" onClick={hamburgerMenu}>
                    {clicked ? "" : "menu"}
                </div>
                <div className='linkbutton' >

                    <ul className={clicked ? "nav-items" : "nav-items menu"}>
                        <div className="hamburger" onClick={hamburgerMenu}>
                            <button className='buttonhamburgerclose'>  {clicked ? "close" : "menu"} </button>
                        </div>
                        <li className="nav-item"> <Link to="/"><button className='button' >home </button></Link> </li>
                        <li className="nav-item"> <Link to="Airpods">  <button className='button' >Airpods </button></Link> </li>
                        <li className='nav-item'> <Link to="Macbook">  <button className='button' >Macbook </button></Link> </li>
                        <li className='nav-item'>  <Link to="Iphone">  <button className='button' >Iphone  </button></Link> </li>
                        <li className='nav-item'> <Link to="Ipad">  <button className='button' >Ipad  </button></Link> </li>

                    </ul>

                </div>
                <button className='basket' onClick={handleShow}> {alert} {productsCount} product</button>
            </header>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
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
                        <h1>Cart empty</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;