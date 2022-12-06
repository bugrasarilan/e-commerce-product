import { createContext, useState } from "react";
import { getProductData } from "./productsStore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [productsArray, setProductsArray] = useState([]);
    function getProductQuantity(id) {
        const quantity = productsArray.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
             return 0;
            }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { 
            setProductsArray(
                [...productsArray,{ id: id, quantity: 1}]
            )
        } else {
            setProductsArray(
                productsArray.map(
                    product =>
                    product.id === id ? { ...product, quantity: product.quantity + 1 } : product                                        
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
            deleteFromCart(id);
        } else {
            setProductsArray(
                productsArray.map(
                    product =>
                    product.id === id ? { ...product, quantity: product.quantity - 1 } : product                                        
                )
            )
        }
    }

    function deleteFromCart(id) {
        setProductsArray(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        productsArray.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: productsArray,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (  //CartContext.Provider içerisinde tüm değerleri sardım.
        <CartContext.Provider value={contextValue}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
