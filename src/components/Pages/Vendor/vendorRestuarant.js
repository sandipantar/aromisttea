 import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../Pages/Vendor/Headers/Header';
import Topnav from '../../Pages/Vendor/Headers/Topnav';
import { fetchRestaurant,fetchStation, createRestaurant,editRestaurant, deleteRestaurant } from "../../../crud/common.crud";
import { Card,Container,Row,Form,Modal,Button } from 'react-bootstrap-v5';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
const VendorRestuarant =(props) => {
    const loggedin = JSON.parse(localStorage.getItem("userLoggedin"));
    const adminDetails = JSON.parse(localStorage.getItem('user'));
    const userEmail = adminDetails.userEmail;
    console.log(userEmail);
    const [isOpen, setIsOpen] = useState(false);
    const [isEOpen, setIsEOpen] = useState(false);
    
    const [query, setQuery] = useState("");
    const [restaurant, setUsers] = useState([{
         resName : '',
        resType : '',
        reslocation: [{
                    stationName1 : "",
                    code: ""
                     }],
        rating: '',
        review: '',
    }]);  
    const [station, setStation] = useState([]);
    const [ stationName1, setStationName1 ]= useState([]);
    const [ _id, setId ]= useState('');
    const [ resName, setResName ]= useState('');
    const [ resType, setResType ]= useState('');
    const [ miniOrderVal, setMiniOrderVal ]= useState('');
    const [ rating, setRating ]= useState('');
    const [ review, setReview ]= useState('');
    const [ distance, setDistance]= useState([]);
    const [reslocation, setResLocation] = useState([{}]);
    // const [rows1, setRows1] = useState([{}]);
    
    
    useEffect(() => {
        fetchRestaurant().then(res => {
            setUsers(res.data);
        });

        fetchStation().then(res => {
            setStation(res.data);
        });
    }, []);
    
    
    
    const toggleAddModal = () => {
        
        setIsOpen(!isOpen);
    };

    const addStationName1 = (e) => {
        let index = e.target.attributes.index.value; 
        let fieldValue = e.target.value;
        const tempRows = [...stationName1];
        tempRows[index] = fieldValue;
        setStationName1(tempRows);
        setResLocation(tempRows);
    };

    const addDistance = (e) => {
        let index = e.target.attributes.index.value; 
        let fieldValue = e.target.value;
        const tempRows = [...distance]; 
        tempRows[index] = fieldValue;
       setDistance(tempRows);
       setResLocation(tempRows);
    };

    const handleAddRow = () => {
        const item = {};
        setResLocation([...reslocation, item]);
        
      };
     

    const handleSubmit=(e) => {
        e.preventDefault(); 
           
        var loc = [];
        // var dist = distance.split(',');
        reslocation.forEach(function (eachRow, index, array) {
            var data1 = {
                stationName1 :  stationName1[index],
                distance: distance[index]    
            }
            loc.push(data1);
        })
        
        const restaurant_dtl = {           
            resType:resType,
            miniOrderVal:miniOrderVal,
            rating:rating,
            review:review,
            resName:resName,
            userEmail:userEmail,
            reslocation:loc
        }
        
        console.log(restaurant_dtl);
        createRestaurant(restaurant_dtl).then((res)=>{
            // console.log(restaurant_dtl);
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        });

    };

    

      const handleDelete = (idx,e) => {
        e.preventDefault();
        setResLocation(reslocation.filter((v, i) => i !== idx  ));
        setStationName1(stationName1.filter((v, i) => i !== idx ));
        setDistance(distance.filter((v, i) => i !== idx ));
       
       console.log(idx,e)
   }

    const handleSubmit1=(e) => {
        e.preventDefault();   
        var loc = [];
        // var dist = distance.split(',');
        reslocation.forEach(function (eachRow, index, array) {
            var data1 = {
                stationName1 :  stationName1[index],
                 distance: distance[index]    
                }
                loc.push(data1);
            })
    
      
        
        const restaurant_dtl = {
           
            resType:resType,
            miniOrderVal:miniOrderVal,
            rating:rating,
            review:review,
            resName:resName,
            reslocation:loc
        }

   
        console.log(_id,restaurant_dtl);
        editRestaurant(_id,restaurant_dtl).then((res)=>{
            // console.log(restaurant_dtl);
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        });  
        
    };
    
    const toggleEditModal = (_id,resName,resType,miniOrderVal,rating,review,reslocation) => {
        setIsEOpen(!isEOpen);
        console.log(_id);
        setId(_id);
        setResName(resName);
        setResType(resType);
        setMiniOrderVal(miniOrderVal);
        setRating(rating);
        setReview(review);
        // setStationName1(stationName1);
        var loc = [], dist=[];
        reslocation.forEach(function (eachRow, index) {
            loc.push(eachRow.stationName1);
            dist.push(eachRow.distance);   
            })
            console.log(loc);
            console.log(dist);
            setResLocation(loc);
            setStationName1(loc);
            setDistance(dist);
           
           
    };

    const delAdmin = (resName) => {
        deleteRestaurant(resName).then((res)=>{
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
            <Row className="p-2 m-2  ">
                    <div className="d-flex justify-content-between">
                    <div>
                    <Button className="btn btn-success pr-2 mr-2 " onClick={toggleAddModal}>New Restaurat</Button>
                    </div>
                    <div >
                    <input  placeholder="Search..."  
                    onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                    </div>
                    </div>
                </Row>
                <Row>{
                    restaurant.filter((asd) =>asd.resName.toLowerCase().includes(query)).map((usr,index) =>
                    <div key={index} >
                            { (usr.userEmail===userEmail)?
                    <Card  className="p-2 m-2 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    
                        <Card.Header>
                            <Row>
                            <div className="col-8">{usr.resName}</div>
                            <div className="col-4">
                                <Button className="btn btn-info btn-sm" onClick={(e)=>{toggleEditModal(usr._id,usr.resName,usr.resType,usr.miniOrderVal,usr.rating,usr.review,usr.reslocation)}}>
                                    <i className="fa fa-edit"></i>
                                    </Button>
                                
                                <Button className="btn btn-danger btn-sm" onClick={() => {if(window.confirm('Are you sure you want to delete the Station?')){ delAdmin(usr.resName) };}}><i className="fa fa-trash"></i></Button>
                            </div>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <div><b>Veg Type : </b>{usr.resType} </div>
                            <div><b>Order Vlaue : </b>{usr.miniOrderVal} </div>
                            <div><b>Location : </b>{usr.reslocation.map((a,idx) => {return ( <div key={idx}><h6>Station Name : {a.stationName1}</h6><h6>Distance : {a.distance}</h6><br></br></div>)  })} </div>
                            {/* <div><b>Location : </b>{usr.resLocation.stationName1 } </div>  */}
                            <div><b>Rating : </b>{usr.rating} </div>
                            <div><b>Reviews : </b>{usr.review} </div>
                            <div></div>
                        </Card.Body>
                        {/* {:null} */}
                    </Card>
                    :null}
                    </div>
                    )}</Row>

                <Modal show={isOpen} onHide={toggleAddModal} >
                    <Modal.Header>
                        <Modal.Title>Add New Restuarant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Restaurant Name</Form.Label>
                                <Form.Control type="text" 
                                    value={resName} required
                                    onChange={(e)=>{setResName(e.target.value)}}  
                                />  
                            </Form.Group>
                        
                            <Form.Group className="mb-3" controlId="formCity">
                                <Form.Label>Select If Type is  Veg</Form.Label>
                                <div>
                                    <input type="checkbox" value="Veg" checked={resType}
                                        onChange={(e)=>{setResType(e.target.value); setResType(!resType)} }
                                    />
                                    <Form.Label>VEG</Form.Label>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCode">
                                <Form.Label>Mini Order value</Form.Label>
                                <Form.Control type="text" required
                                value={miniOrderVal}
                                onChange={(e)=>{setMiniOrderVal(e.target.value)}}
                            />
                            </Form.Group>

                        
                            <div className="app container">                        
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Station Name</th>
                                        <th scope="col">Distance (KM)</th>
                                        <th>
                                            <button type="button" className="btn btn-primary me-3" onClick={handleAddRow}>
                                            <i className="fa fa-plus"></i>
                                            </button>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    
                                        {reslocation.map((item,idx,row,index) => {return (
                                            <tr key={idx}>
                                            <th scope="row">{idx + 1}</th>
                                            
                                            <td >
                                            <Form.Group className="" controlId="formPic">
                                        

                                                <Form.Select index={idx} value={stationName1[idx]}   onChange={(e)=>{addStationName1(e)}} >
                                                    {station.map((usr,index )=>   
                                                    <option key={index} value={usr.stationName}>{usr.stationName}</option>   
                                                    )}
                                                </Form.Select>
                                            
                                            </Form.Group>
                                            </td>
                                            
                                            
                                                
                                            <Form.Group className="" controlId="formName">
                                                     
                                                        <Form.Control type="text" 
                                                            index={idx} value={distance[idx]}   onChange={(e)=>{addDistance(e)}} 
                                                            placeholder="Distance From Station" />  
                                                    </Form.Group>
                                    
                                            
                                            {/* <td>
                                            <button type="button" className="btn btn-primary me-3" onClick={handleAddRow}>
                                            <i className="fa fa-plus"></i>
                                            </button>
                                        </td> */}
                                        <td>
                                        <button className="btn btn-outline-danger btn-sm" name={item} onClick={e => handleDelete(idx,e)}> 
                                        <i className="fa fa-trash"></i> 
                                            </button>

                                        </td>
                                        </tr>
                                        
                                            
                                        
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div>
                                <Button className="btn btn-danger btn-sm" onClick={toggleAddModal}>Cancel</Button>
                                <Button className="btn btn-success btn-sm" type="submit">Save</Button>
                            </div>

                        </Form>
                    </Modal.Body>
                </Modal>  

                <Modal show={isEOpen} onHide={toggleEditModal} >
                    <Modal.Header>
                        <Modal.Title>Edit Restuarant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit1}>
                            
                            <Form.Group className="mb-3" controlId="formid">
                                
                                <Form.Control  type="hidden"
                                    defaultValue={_id}
                                    onChange={(e)=>{setId(e.target.value)}}  
                                        />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Restuarant Name</Form.Label>
                                <Form.Control  type="text"
                                    defaultValue={resName}
                                    onChange={(e)=>{setResName(e.target.value)}}  
                                        />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCity">
                                <Form.Label>Select If Only  Veg</Form.Label>
                                <div>
                                    <input
                                    type="checkbox"
                                    
                                    defaultValue={resType}
                                    checked={resType}
                                
                                    onChange={(e)=>{setResType(e.target.value); setResType(!resType)} } 
                                    
                                    
                                    />
                                    <Form.Label>VEG</Form.Label>
                                </div>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formCode">
                                <Form.Label>Mini Order val</Form.Label>
                                <Form.Control type="text" 
                                defaultValue={miniOrderVal}
                                onChange={(e)=>{setMiniOrderVal(e.target.value)}}
                                />
                            </Form.Group>
                            
                            <div className="app container">                        
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Station Name</th>
                                        <th scope="col">Distance (KM)</th>
                                        <th>
                                            <button type="button" className="btn btn-primary me-3" onClick={handleAddRow}>
                                            <i className="fa fa-plus"></i>
                                            </button>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>                           
                                        {reslocation.map((item,idx,row,index) => {return (
                                            <tr key={idx}>
                                                <th scope="row">{idx + 1}</th>
                                                
                                                <td >
                                                <Form.Group className="" controlId="formPic">
                                            

                                                    <Form.Select index={idx} defaultValue={stationName1[idx]}   onChange={(e)=>{addStationName1(e)}} >
                                                        {station.map((usr,index) =>   
                                                        <option key={index} value={usr.stationName}>{usr.stationName}</option>   
                                                        )}
                                                    </Form.Select>
                                                
                                                </Form.Group>
                                                </td>
                                            
                                                <td style={{width:'25%'}}>
                                                
                                                <Form.Group className="" controlId="formName " >
                                                    
                                                    <Form.Control type="text" 
                                                        index={idx} defaultValue={distance[idx]}   onChange={(e)=>{addDistance(e)}} 
                                                        placeholder="Distance From Station" />  
                                                </Form.Group>
                                        
                                                </td>
                                                {/* <td>
                                                <button type="button" className="btn btn-primary me-3" onClick={handleAddRow}>
                                                <i className="fa fa-plus"></i>
                                                </button>
                                                    </td> */}
                                                    <td>
                                                <button className="btn btn-outline-danger btn-sm" onClick={e => handleDelete(idx,e)}> 
                                                <i className="fa fa-trash"></i> 
                                                </button>

                                            </td>
                                            </tr>                                    
                                        );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div>
                                <Button className="btn btn-danger btn-sm" onClick={toggleEditModal}>Cancel</Button>
                                <Button className="btn btn-success btn-sm" type="submit">Save</Button>
                            </div>

                        </Form>
                    </Modal.Body>
                </Modal>  
                
            </Container> 
            </div>   
        </>
    )
}

export default VendorRestuarant;