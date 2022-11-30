import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap-v5";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Header from "./Header/Header";
import Rating from "./Rating";


const Cart = () => {
  const {
    state: {cart},
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
    useEffect(() => {
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty,0));
    }, [cart]);
    

  return (
    <>
    <Header/>
    <div className="products">
      <div className="productContainer">
      <ListGroup>
        {cart.map((prod) =>(
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image className="ckeckOutImg" src={prod.image} alt={prod.name} fluid rounded/>
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                  <span>₹ {prod.price.split(".")[0]}</span>
                </Col>
                <Col md={2}>
                  <Rating rating={prod.ratings}/>
                </Col>
                <Col md={2}>
                  <Form.Control as="select" value={prod.qty}>
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x+1}>{x+1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                <div className='float-end'>
                  <AiFillDelete
                    className=''
                    fontSize="18px"
                    style={{cursor: "pointer"}}
                    onClick={()=>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })}/>
                </div>
                </Col>
              </Row>
              
            </ListGroup.Item>
          ))}
      </ListGroup>
      </div>
      <div className="filters summary bg-dark-green">
          <span className="title">Subtotal ({cart.length}) items</span>
          <span style={{fontWeight:'700', fontSize:'20'}}> Total : ₹ {total}</span>
          <Button disabled={cart.length===0}>
            Proceed to Checkout
          </Button>
      </div>
    </div>
    </> 
  )
};

export default Cart;