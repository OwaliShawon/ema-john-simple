import React from 'react';

const ReviewIteam = (props) => {
    const { name, quantity } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid black',
        marginBottom: '5px',
        paddingBottom: '10px',
        marginLeft: '200px'

    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <br />
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewIteam;