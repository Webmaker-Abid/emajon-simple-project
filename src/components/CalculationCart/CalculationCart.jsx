import React from 'react';
import './CalculationCart.css'

const CalculationCart = (props) => {
  
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of props.cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity  + product.quantity;

    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <h6>Selected Items: {quantity}</h6>
            <p>Total Price: ${total} </p>
            <p>Total Shipping Charge:${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: $ {grandTotal.toFixed(2)}</h5>
            <button className='cart-clear'>Clear Cart</button>
            <button className='cart-review'>Review Order</button>
        </div>
    );
};

export default CalculationCart;    
