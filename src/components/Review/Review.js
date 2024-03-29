import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewIteam from '../ReviewItem/ReviewIteam';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])
    return (
        <div>
            <h1>Cart Items: {cart.length}</h1>
            {
                cart.map(pd => <ReviewIteam 
                    key = {pd.key}
                    product={pd}>
                    </ReviewIteam>)
            }
        </div>
    );
};

export default Review;