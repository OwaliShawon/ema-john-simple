import React from 'react';
import "./Product.css";

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, stock} = props.product;
    // const productName = props.product.name;
    // const productImage = props.product.img;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by {seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>only {stock} left in stock - Order soon</small></p>
                <button>add to cart</button>
            </div>

        </div>
    );
};

export default Product;