import { poke } from 'bazar';
import { Card, Container, Row, Button, Modal, Col, i,Badge,Tab,Nav,InputGroup,FormControl,Form,Carousel } from 'react-bootstrap-v5';
import vIcon from '../../images/veg.png';
import nonvIcon from '../../images/nonveg.png';

let onlyVeg=1;
const Item = props => {
    const { name, price, hex, text } = props.color;
  
    const buy = () =>
      poke("App", {
        name,
        type: "increment"
      });
  
    return (        
        <>
            <Card className=" w-50 float-start">
                <Card.Header>
                    <Row>
                        <Col md={2} className="my-auto">
                            {onlyVeg ? 
                            (<img src={vIcon} width="15px"/>)
                                            :
                            (<img src={nonvIcon} width="15px"/>)
                            }                                                    
                        </Col>
                        <Col md={10}>{name}</Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        <div className="float-start">
                            <i className="fa fa-inr"></i> {price}
                        </div>&nbsp;
                        <button className="buyButton" onClick={() => buy()}>
                            <i className="fa fa-shopping-cart float-end rounded-circle border p-2 border-info border-2"></i>
                        </button>
                    </Card.Subtitle>
                    <Card.Text>
                        Contains : 2x Chicken, 1x Egg, 1x Salad, 1x Raita, 1x spoon
                    </Card.Text>                                                                    
                </Card.Body>
            </Card>
      </>
    )
  }
  export default Item;