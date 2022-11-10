import React from 'react';
// import { Navigate } from 'react-router-dom';
import Header from '../../Pages/Vendor/Headers/Header';
import Topnav from '../../Pages/Vendor/Headers/Topnav';
import { Navigate } from 'react-router-dom';
 import { Card } from 'react-bootstrap-v5';

const vendorDashboard = () => {
const loggedin = JSON.parse(localStorage.getItem("userLoggedin"));
    if(!loggedin) {
        return <Navigate to="/" />;
    }
    return(
        <>
        <div id="wrapper">
        <Header pageName="Dashboard" />
        <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <Topnav pageName="Dashboard" />
        <div className="container mt-3">
        <div className="row">
        

            
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                 <a className="text-decoration-none" href="/vendorRestuarant">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    <h4>Restuarant</h4>
                                </div>
                                <div className=" mb-0 font-weight-bold text-gray-800">Restuarant</div></a>
                            </div>
                            
                            <div className="col-auto">
                            <i className="fa fa-user fa-3x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                 <a className="text-decoration-none" href="/vendorMenu">
                                <div className="text-xs  text-primary text-uppercase mb-1">
                                    <h4>Menu</h4>
                                </div>
                                <div className=" mb-0 font-weight-bold text-gray-800">Menu</div></a>
                            </div>
                            
                            <div className="col-auto">
                            <i className="fa fa-comments fa-3x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           



            


        </div>
         
        </div>
        </div>  
        </div>
        </div>      
        </>
    )
}
export default vendorDashboard;