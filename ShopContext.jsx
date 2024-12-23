import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0; // Initializes cart items with 0 quantity for each product
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1, // Increment the quantity for the product
        }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] > 0) {
                return {
                    ...prev,
                    [itemId]: prev[itemId] - 1, // Decrease the quantity for the product
                };
            }
            return prev; // Don't update if the quantity is already 0
        });
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
