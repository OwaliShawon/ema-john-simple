import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    // console.log(props.product.key);
    const { img, name, seller, price, stock, key } = props.product;
    // const productName = props.product.name;
    // const productImage = props.product.img;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"product/" + key}>{name}</Link></h4>
                <br />
                <p><small>by {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>only {stock} left in stock - Order soon</small></p>
                {props.showAddToCart === true && <button
                    className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>}
            </div>

        </div>
    );
};

export default Product;