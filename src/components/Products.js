import React from 'react'
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';
import '../css/style.css';
import Filters from './Filters';
import Header from './Header/Header';
import { Container } from 'react-bootstrap-v5';


const Products = () => {

    const { 
        state: {products},
     } = CartState();
    console.log(products);

  return (
    <div>
        <Header/>
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
    </div>
  )
}

export default Products