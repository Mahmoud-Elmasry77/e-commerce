import { Nav,NavDropdown,Navbar,Container} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faUser,faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./na.css";
import theimg from'./imges/sports-shoe3-300x300.jpg';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
function Na({data, n, nav, cartnav}) {
  const [show, setshow] = useState();
  const [showcart , setShowcart] = useState(true);
  const [pronav, setpronav] = useState([]);
  const [pricecart , setpricecart] = useState()
  const[arr , Setarr] = useState(true)

  const saidebar = ()=>{
      setshow(!show)
    }

    const Shcart = ()=>{
      setShowcart(!showcart)
    }
  const Claerpro = (indix)=>{
    pronav.splice(indix,1)
    Setarr(!arr)
    window.localStorage.setItem("product",JSON.stringify(pronav))
  }
  useEffect(()=>{
    setpronav(cartnav)
    if(window.localStorage.getItem("price")|| window.localStorage.getItem("product")){
    setpricecart(JSON.parse(window.localStorage.getItem("price")));
    setpronav(JSON.parse(window.localStorage.getItem("product")))
    }else{
      setpronav([])
      setpricecart("")
    };
  },[cartnav])


  return (

     <Navbar  expand="lg" className={nav? "navbar" : "navbar-woman"}>

          
        <Navbar.Brand href="/e-commerce">DNK</Navbar.Brand>

          <Nav className="me-auto">
          <div className='links'>
            <div className='left-link'>
            <NavLink className="nav-link" to="/e-commerce">EVERYTHING</NavLink>
            <NavLink className="nav-link" to="/woman">WOMEN</NavLink>
            <NavLink className="nav-link" to="/men">MEN</NavLink>
            <NavLink className="nav-link" to="/accessories">ACCESSORIES</NavLink>
            </div>
            <div className='right-link'>
              <NavLink className="nav-link" to="about">ABOUT</NavLink>
              <NavLink className="nav-link " to="contactus">CONTACTUS</NavLink>
              <a onClick={Shcart} className="nav-link salary sm1">${data}</a>
              <div className='num-stor stor'>
              <div className='num'>{n}</div>
              <a onClick={Shcart} className="nav-link car"><FontAwesomeIcon icon={faCartShopping}/></a>
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
                      <NavLink className="xs-links" to="/e-commerce">EVERYTHING</NavLink>
                      <NavLink className="xs-links" to="/woman">WOMEN</NavLink>
                      <NavLink className="xs-links" to="/men">MEN</NavLink>
                      <NavLink className="xs-links" to="/accessories">ACCESSORIES</NavLink>
                      
                          <div className='about-us'>
                          <NavLink className="xs-links" to="about">ABOUT</NavLink>
                          <NavLink className="xs-links " to="contactus">CONTACTUS</NavLink>
                          </div>
                      </div>

                        <div onClick={saidebar} className={show? "xmark" : "xmark-show"}>
                          <FontAwesomeIcon  icon={faXmark} />
                        </div>
                 </div>
            </div>

          
            <div className={showcart? "cart-shop": "cart-shop show-cart"}>
                          <div className='nav-cart' >
                            <p className='p-cart'> Shopping Cart</p>
                            <div onClick={Shcart} className='close-cart'><FontAwesomeIcon icon={faXmark}/></div>
                          </div>
                           {pronav&& pronav.map((pro, indix)=> 

                      <div className='pro-nav' key={pro.id}>
                      <div className='pro-nav-caption'>
                          <img src={pro.image}/>
                          <h4>{pro.title}</h4>
                          <p>${pro.price}</p>
                      </div>
                      <button onClick={()=>Claerpro(indix)}><FontAwesomeIcon icon={faXmark}/></button>
                      
                    </div>
                      )}   
                    {pronav && pronav.length > 0 ? <button className='btn-showcart'>showcart</button> : ""} 
                    {pronav && pronav.length > 0 && pricecart? <button className='btn-showcart'>Total {pricecart}</button> : ""}
              </div>
    </Navbar>
  );
}

export default Na;