import React from "react";
import Toggle from './toggle';
// import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from "react-bootstrap";
import './navbar.css';



const Toolbar= props =>(
<header className="toolbar">

    <nav className="toolbar_navigation row">
        <div className='toggle_button'> <Toggle click={props.drawerClickHandler}/> </div>
        <div className="toolbar_logo  col-6"><a href="/"><img className="logo" src={"https://www.docplanner.com/img/logo-default-group-en.svg?v=1"}  alt=''/></a></div>
        
        <div className="toolbar_navigation_items col-4">
            <ul className="row">
                <li className="col"><a href="/">About us</a></li>
                <li className="col"><a href="/">Career</a></li>
                <li className="dropdown col"><div className="dropbtn"><a href="/">  Departments </a></div>
                    <div class="dropdown-content">
                        <a href="/">Marketing & PR</a>
                        <a href="/">Customer success & sales</a>
                        <a href="/">IT, Product, Design & UX</a>
                        <a href="/">Finance & Administration</a>
                        <a href="/">HR & more</a>
                    </div>
                
                </li>
                                      
            </ul>
            
        
        </div>
    </nav>

</header>
);
  export default Toolbar;