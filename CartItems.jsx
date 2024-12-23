import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, CartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                {all_product.map((product) => {
                    if (CartItems[product.id] > 0) {
                        return (
                            <div key={product.id} className="cartitem-format">
                                <img src={product.image} alt={product.title} className="carticon-product-icon" />
                                <p>{product.title}</p>
                                <p>${product.price}</p>
                                <div className="cartitems-quantity">
                                    <button>-</button>
                                    <span>{CartItems[product.id]}</span>
                                    <button>+</button>
                                </div>
                                <p>${(product.price * CartItems[product.id]).toFixed(2)}</p>
                                <img
                                    src={remove_icon}
                                    alt="Remove"
                                    onClick={() => removeFromCart(product.id)}
                                    className="cart-remove-icon"
                                />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default CartItems;
