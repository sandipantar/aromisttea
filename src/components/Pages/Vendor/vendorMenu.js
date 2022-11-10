import React, { useState, useEffect } from 'react';
import Header from '../../Pages/Vendor/Headers/Header';
import { fetchRestaurant,fetchMenu, createMenu,editMenu, deleteMenu,fetchCat} from "../../../crud/common.crud";
import { Navigate } from 'react-router-dom';
import { Card,Container,Row,Form,Modal,Button,Col } from 'react-bootstrap-v5';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
const VendorMenu =(props) => {

    const loggedin = JSON.parse(localStorage.getItem("userLoggedin"));
    const adminDetails = JSON.parse(localStorage.getItem('user'));
    const userEmail = adminDetails.userEmail;
    const [isOpen, setIsOpen] = useState(false);
    const [isEOpen, setIsEOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [menu, setMenu] = useState([]);
    const [restaurant, setUsers] = useState([]);
    const [ _id, setId ]= useState('');
    const [ menuName, setMenuName ]= useState('');
    const [ resName, setResName ]= useState('');
    const [ category, setCategory ]= useState('');
    const [ price, setPrice ]= useState('');
    const [ containsDetails, setContainsDetails ]= useState('');
    const [ dishType, setDishType ]= useState('');
    const [cat, setCat] = useState([]);
     
    


    useEffect(() => {
        fetchMenu().then(res => {
            setMenu(res.data);
        });

        fetchRestaurant().then(res => {
            setUsers(res.data);
        });

        fetchCat().then(res => {
            setCat(res.data);
        });
    }, []);
    
    
    const toggleAddModal = () => {
        
        setIsOpen(!isOpen);
    };

    var resName1;
    {restaurant.map((usr,index) =>
        <div key={index}>
        {(usr.userEmail===userEmail)?
        resName1=usr.resName
    :null
        }
        </div>
    )};

    const handleSubmit=(e) => {
        e.preventDefault();
       
        console.log(resName1);
            createMenu(menuName,resName1,category,price,containsDetails,dishType).then((res)=>{
            window.location.reload();
        }).catch((err)=>{
        console.log(err);
        });
    };

    const handleSubmit1=(e) => {
        e.preventDefault();  
    
        
        editMenu(_id,menuName,resName1,category,price,containsDetails,dishType).then((res)=>{
            window.location.reload();
        }).catch((err)=>{
        console.log(err);
        });
    };
    
    const toggleEditModal = (_id,menuName,resName,category,price,containsDetails,dishType) => {
     
    setId(_id);
    setMenuName(menuName);
    setResName(resName);
    setCategory(category);
    setPrice(price);
    setContainsDetails(containsDetails);
    setDishType(dishType);
       setIsEOpen(!isEOpen);
    };

    const delAdmin = (menuName) => {
        deleteMenu(menuName).then((res)=>{
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        });
    };

    if(!loggedin) {
        return <Navigate to="/" />;
    }
    return(
        <>
        <div id="wrapper">
            <Header />
            <Container>
            <Col>
                    
                    </Col>
                    <Row className="p-2 m-2  ">
                    <div className="d-flex justify-content-between">
                    <div>
                    <Button className="btn btn-success ml-4" onClick={toggleAddModal}>New Menu</Button>
                   </div>
                    <div >
                    <input  placeholder="Search..."  
                    onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                    </div>
                    </div>
                </Row>
                <Row>{
                    menu.filter((asd) =>asd.menuName.toLowerCase().includes(query)).map((usr,index) =>
                    <div className="d-flex justify-content-left" key={index} >
                            { (usr.resName===resName1)?
                    <Card  className="p-2 m-2 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <Card.Header>
                            <Row>
                            <div className="col-8">{usr.menuName}</div>
                            <div className="col-4">
                                <Button className="btn btn-info btn-sm" onClick={(e)=>{toggleEditModal(usr._id,usr.menuName,usr.resName,usr.category,usr.price,usr.containsDetails,usr.dishType)}}>
                                    <i className="fa fa-edit"></i>
                                    </Button>
                                
                                <Button className="btn btn-danger btn-sm" onClick={() => {if(window.confirm('Are you sure you want to delete the Station?')){ delAdmin(usr.menuName) };}}><i className="fa fa-trash"></i></Button>
                            </div>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                        
                            <div><b>Restaurant Name : </b>{usr.resName} </div>
                            <div><b>Category : </b>{usr.category} </div>
                            
                            <div><b>Price : </b>{usr.price} </div>
                            <div><b>Detils : </b>{usr.containsDetails} </div>
                            <div><b>DIsh Type : </b>{usr.dishType} </div>
                            <div></div>
                        </Card.Body>
                    </Card>
                    :null}
                    </div>
                    )
                }</Row>

                <Modal show={isOpen} onHide={toggleAddModal} >
                    <Modal.Header>
                        <Modal.Title>Add Menu for {resName1}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>

                   

                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Menu Name</Form.Label>
                          
                                 <Form.Select  value={menuName} required onChange={(e)=>{setMenuName(e.target.value) }}>
                            <option  value="" disabled className='text-hide'>Please Select</option> 
                            {menu.map((usr,index) =>   
                             <option key={index} value={usr.menuName}>{usr.menuName}</option>   
                                
                            )}
                        </Form.Select>
                        </Form.Group>

                        
                     

                       

                       
                        <Form.Group className="mb-3" controlId="formCode">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" required
                            value={price}
                            onChange={(e)=>{setPrice(e.target.value)}}
                           />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPic">
                            <Form.Label>Contains Details</Form.Label>
                            <Form.Control type="text" required
                            value={containsDetails}
                            onChange={(e)=>{setContainsDetails(e.target.value)}} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPic">
                            <Form.Label>Category</Form.Label>
                            {/* <Form.Control type="text" 
                            value={category}
                            onChange={(e)=>{setCategory(e.target.value)}} /> */}
                            <Form.Select  value={category} required onChange={(e)=>{setCategory(e.target.value) }}>
                            <option  value="" disabled className='text-hide'>Please Select</option> 
                            {cat.map((usr,index) =>   
                             <option key={index} value={usr.catName}>{usr.catName}</option>   
                                
                            )}
                        </Form.Select>
                        </Form.Group>

                       

                        <Form.Group className="mb-3" controlId="formPic">
                            <Form.Label>Dish Type</Form.Label>
                            <Form.Select  value={dishType} required
                             onChange={(e)=>{setDishType(e.target.value) }}>
                        
                        <option  value="" disabled className='text-hide'>Please Select</option> 
                             <option  value="NON VEG ">NON VEG </option>  
                             <option defaultValue=" VEG " > VEG </option>   
                                
                    
                     </Form.Select> 
                        </Form.Group>
            
                        <Modal.Footer>
                        <Button className="btn btn-danger btn-sm" onClick={toggleAddModal}>Cancel</Button>
                        <Button className="btn btn-success btn-sm" type="submit">Save</Button>
                        </Modal.Footer>

                    </Form>
                    </Modal.Body>
                </Modal>  

                <Modal show={isEOpen} onHide={toggleEditModal} >
                    <Modal.Header>
                        <Modal.Title>Edit Menu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={handleSubmit1}>
                        
                    <Form.Group className="mb-3" controlId="formCode">
                            {/* <Form.Label>Id</Form.Label> */}
                            <Form.Control type="hidden" 
                            defaultValue={_id}
                            onChange={(e)=>{setId(e.target.value)}}
                           />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Menu Name</Form.Label>
                            <Form.Select  defaultValue={menuName} required onChange={(e)=>{setMenuName(e.target.value) }}>
                            <option  value="" disabled className='text-hide'>Please Select</option> 
                            {menu.map((usr,index) =>   
                             <option key={index} value={usr.menuName}>{usr.menuName}</option>   
                                
                            )}
                        </Form.Select>
                        </Form.Group>

                       
                       
                        <Form.Group className="mb-3" controlId="formCode">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" 
                            defaultValue={price}
                            onChange={(e)=>{setPrice(e.target.value)}}
                           />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPic">
                            <Form.Label>Contains Details</Form.Label>
                            <Form.Control type="text" 
                            defaultValue={containsDetails}
                            onChange={(e)=>{setContainsDetails(e.target.value)}} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPic">
                            <Form.Label>Category</Form.Label>
                            {/* <Form.Control type="text" 
                            defaultValue={category}
                            onChange={(e)=>{setCategory(e.target.value)}} /> */}
                              <Form.Select  defaultValue={category}  onChange={(e)=>{setCategory(e.target.value) }}>
                            {cat.map((usr1,index) =>   
                             <option key={index} value={usr1.catName}>{usr1.catName}</option>   
                                
                            )}
                        </Form.Select>
                        </Form.Group>

                       

                        <Form.Group className="mb-3" controlId="formPic">
                            <Form.Label>Dish Type</Form.Label>
                            <Form.Select  defaultValue={dishType}  onChange={(e)=>{setDishType(e.target.value) }}>
                        
                         
                             <option value="NON VEG ">NON VEG </option>  
                             <option value=" VEG "> VEG </option>   
                                
                    
                     </Form.Select> 
                            {/* <Form.Control type="text" 
                            defaultValue={dishType} 
                            onChange={(e)=>{setDishType(e.target.value)}} /> */}
                        </Form.Group>
            
                        <Modal.Footer>
                        <Button className="btn btn-danger btn-sm" onClick={toggleEditModal}>Cancel</Button>
                        <Button className="btn btn-success btn-sm" type="submit">Save</Button>
                        </Modal.Footer>

                    </Form>
                    </Modal.Body>
                </Modal>  

                
                
            </Container>   
            </div> 
        </>
    )
}

export default VendorMenu;