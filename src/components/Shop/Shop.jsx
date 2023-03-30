import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import CalculationCart from '../CalculationCart/CalculationCart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    const [cart,setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    useEffect(()=>{
        // console.log(products)

        const storeCart = getShoppingCart();
        const saveCart = [];
        // console.log(shoppingCart);

        for(const id in storeCart){
            // console.log(id);
            const addProduct = products.find( product => product.id === id)
            // console.log(saveProduct);
            if(addProduct){
                const quantity = storeCart[id];
                addProduct.quantity = quantity;
                saveCart.push(addProduct);
            }
            // console.log(quantity);
        }
        setCart(saveCart);


    },[products])

    const handleAddToCart = (product) => {
        console.log('clicked')
        let newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart= {handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <CalculationCart cart={cart}></CalculationCart>
            </div>
            
        </div>
    );
};

export default Shop;