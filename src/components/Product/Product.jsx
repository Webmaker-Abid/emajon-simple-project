import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, ratings, seller} = props.product
    return (
        <div className='product'>
           <div className='product-info'>
           <img src={img} />
           <h4>Name: {name}</h4>
           <h5>Price: ${price}</h5>
           <h5>Ratings: {ratings} Stars</h5>
           <h5>Seller: {seller}</h5>
           </div>
           <button className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;