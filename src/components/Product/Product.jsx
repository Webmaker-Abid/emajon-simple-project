import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    const {img, name, price, ratings, seller} = props.product
    const cartHandle = props.handleAddToCart
    // console.log(props.product)
    return (
        <div className='product'>
           <div className='product-info'>
           <img src={img} />
           <h4>Name: {name}</h4>
           <h5>Price: ${price}</h5>
           <h5>Ratings: {ratings} Stars</h5>
           <h5>Seller: {seller}</h5>
           </div>
           <button onClick={()=>cartHandle(props.product)} className='cart-btn'>
            Add To Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;