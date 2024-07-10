import { Nav,NavDropdown,Navbar,Container} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faUser,faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./na.css"
function Na() {
  const [show, setshow] = useState();

 const saidebar = ()=>{
    setshow(!show)
  }
  return (

     <Navbar  expand="lg">

        <Navbar.Brand href="/e-commerce">DNK</Navbar.Brand>

          <Nav className="me-auto">
          <div className='links'>
            <div className='left-link'>
            <NavLink className="nav-link" to="/">EVERYTHING</NavLink>
            <NavLink className="nav-link" to="/women">WOMEN</NavLink>
            <NavLink className="nav-link" to="/men">MEN</NavLink>
            <NavLink className="nav-link" to="/accessories">ACCESSORIES</NavLink>
            </div>

            <div className='right-link'>
              <NavLink className="nav-link" to="about">ABOUT</NavLink>
              <NavLink className="nav-link " to="contactus">CONTACTUS</NavLink>
              <NavLink className="nav-link salary sm1" to="salary">$0.00</NavLink>
              <div className='num-stor stor'>
              <div className='num'>0</div>
              <NavLink className="nav-link car" to='stor'><FontAwesomeIcon icon={faCartShopping}/></NavLink>
              </div>
              <NavLink className="nav-link user"  to='user'><FontAwesomeIcon icon={faUser}/></NavLink>
              </div>
              </div>
              <div onClick={saidebar} className='close-nav'>
                <FontAwesomeIcon icon={faBars} />
                </div>
              </Nav>


             <div>
                <div className={show? "aside-link" : "show aside-link" }>
                  <NavLink className=" user"  to='user'><FontAwesomeIcon icon={faUser}/></NavLink>

                      <div className='mo-links'>
                        <NavLink className="xs-links" to="/">EVERYTHING</NavLink>
                        <NavLink className="xs-links" to="/women">WOMEN</NavLink>
                        <NavLink className="xs-links" to="/men">MEN</NavLink>
                        <NavLink className="xs-links" to="/accessories">ACCESSORIES</NavLink>
                        
                          <div className='about-us'>
                          <NavLink className="xs-links" to="about">ABOUT</NavLink>
                          <NavLink className="xs-links " to="contactus">CONTACTUS</NavLink>
                          </div>
                        </div>
                        <div onClick={saidebar} className={show? "xmark" : ""}>
                          <FontAwesomeIcon  icon={faXmark} />
                        </div>
                 </div>
            </div>
    </Navbar>
  );
}

export default Na;