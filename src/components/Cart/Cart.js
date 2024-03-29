import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 12.99;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }

    const tax = total / 10;
    const grandTotal = total + shipping + tax;

    const formetNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping Price: {shipping}</small></p>
            <p><small>TAX + VAT: {formetNumber(tax)}</small></p>
            <p>Product Price: {formetNumber(total)}</p>
            <p>Grand Total Price: {formetNumber(grandTotal)}</p>
            <br />
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;