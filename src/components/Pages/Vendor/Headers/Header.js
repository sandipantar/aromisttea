import React, {useState} from 'react';
import { Nav, Dropdown } from "react-bootstrap-v5";
// import Unit from '../Pages/Unit/Unit';
// import Category from '../Pages/Category/Category';
// import Group from '../Pages/Group/Group';
// import Hsn from '../Pages/Hsn/Hsn';

const Header = (props) => {

    const [isActive, setActive] = useState(true);    
   

    const sidebartoggle = (e) => { 
        document.body.classList.toggle('sidebar-toggled');
        const elem = document.getElementsByClassName("sidebar");
        setActive(!isActive);
    }
    
   
    return(        
        <Nav className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isActive ? "toggled" : ""}`} id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fa fa-laugh-wink"></i>
                </div>
                
            </a>
            
            <hr className="sidebar-divider my-0"/>
             
            <li className="nav-item active">
                <a className="nav-link" href="/vendorDashboard">
                    <i className="fa fa-fw fa-tachometer"></i>
                    <span>Dashboard</span></a>
            </li>
            
            <Dropdown className="mb-3 mx-auto">
                <Dropdown.Toggle  id="dropdown-basic">
                <i className="fa fa-user" aria-hidden="true"> User</i>
                </Dropdown.Toggle>
                <Dropdown.Menu variant="light">
                        <Dropdown.Item href="/vendorRestuarant">
                            <i className="fa fa-user">Restuarant</i>
                        </Dropdown.Item>
                        <Dropdown.Item href="/vendorMenu">
                            <i className="fa fa-fw fa-list-alt"> Menu</i>
                        </Dropdown.Item>
                       
                </Dropdown.Menu>
            </Dropdown>
          
            
            <li className="nav-item">
                <a className="nav-link" href="/login">
                    <i className="fa fa-fw fa-table"></i>
                    <span>logout</span></a>
            </li>
            
            <hr className="sidebar-divider d-none d-md-block"/>
            
            <div className="text-center d-none d-md-inline">
                {isActive? (
                    <button className="rounded-circle border-0" onClick={(e) => sidebartoggle(e)}><i className='fa fa-arrow-right'></i></button>
                ) : (
                    <button className="rounded-circle border-0" onClick={(e) => sidebartoggle(e)}><i className='fa fa-arrow-left'></i></button>
                )
                }
            </div>

        </Nav>
    )
}
export default Header;