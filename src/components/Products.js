import React from 'react'
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';
import '../css/style.css';
import Filters from './Filters';


const Products = () => {

    const { 
        state: {products},
     } = CartState();
    console.log(products);

  return (
    <div className='products'>
        <Filters/>
        <div className='productContainer'>
            {
                products.map((prod) => {
                    return <SingleProduct prod={prod} key={prod.id}/>;
                })
            }

        </div>
    </div>
  )
}

export default Products