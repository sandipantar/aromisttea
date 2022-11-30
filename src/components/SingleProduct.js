import React from 'react'
import { Button, Card } from 'react-bootstrap-v5'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({prod}) => {

  const {
    state: {cart},
    dispatch,
  } = CartState();
  // console.log(cart);
  return (
    <div className='SingleProduct'>
      <Card>
      <Card.Img variant="top" src={prod.image} alt={prod.name} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        ₹ {prod.price.split(".")[0]}
        
          {prod.fastDelivery ?(
            <div>Fast Delivery</div>
          ):(
            <div>5 Day Delivery</div>
          )}
        
        
          <Rating rating={prod.ratings}/>
        <br/>
        {
          cart.some(p => p.id===prod.id)? (
            <Button
            onClick={ () => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              });
            }}
             variant="danger">Remove from cart</Button>
          ):(
            <Button 
            onClick={ () => {
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              });
            }} 
            disabled={!prod.inStock}>
          {prod.inStock ? "Add to cart" : "Out of stock"}
        </Button>
          )
        }
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleProduct