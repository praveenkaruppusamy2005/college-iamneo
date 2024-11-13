import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="shopping-cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price}
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;