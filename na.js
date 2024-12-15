import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./na.css";

function Na({ data, nav, setNav, setRender, render, num, setNum, setCart, cart, cartnav }) {
  const [show, setshow] = useState(false);
  const [showcart, setShowcart] = useState(true);
  const [pricecart, setpricecart] = useState(0);

  const saidebar = () => {

    if(show === false){
      setshow(true)
    }else{
      setshow(false)
    }
    setRender(!render);
    setNav(false)
  };

  const Shcart = () => {
    if(showcart === true){
      setShowcart(false);
      setNav(true);
      setRender(!render)
    }else{
      setShowcart(true)
      setNav(false);
      setRender(!render)
    }
  };


  const Claerpro = (indix) => {

    const updatedCart = [...cart];
    // git indix product in cart
    const productToRemove = updatedCart[indix];

    updatedCart.splice(indix, 1);

    const newTotalPrice = pricecart - productToRemove.price;

    setCart(updatedCart);
    setpricecart(newTotalPrice);
    setNum(num - productToRemove.count);
    
    window.localStorage.setItem("product", JSON.stringify(updatedCart));
    window.localStorage.setItem("num", JSON.stringify(num - productToRemove.count));
    window.localStorage.setItem("price", JSON.stringify(parseFloat((newTotalPrice).toFixed(2))));

    
    setRender(!render);
  };

  useEffect(() => {
    const locaData = JSON.parse(window.localStorage.getItem("product"));
    if (locaData && locaData.length >=1) {
      setpricecart(parseFloat(window.localStorage.getItem("price")));
      setCart(JSON.parse(window.localStorage.getItem("product")));
      setNum(parseInt(window.localStorage.getItem("num")));
    } else {
      setCart(cart);
      setNum(0);
      setpricecart(null)
      window.localStorage.setItem("num", JSON.stringify(num));
      window.localStorage.setItem("price", null)
    }
  },[render]);

  return (
    <Navbar expand="lg" className={nav ? "navbar" : "navbar-other"}>
      <Navbar.Brand href="/e-commerce">DNK</Navbar.Brand>
      <Nav className="me-auto">
        <div className='links'>
          <div className='left-link'>
            <NavLink onClick={()=>setRender(!render)} className="nav-link" to="/e-commerce">EVERYTHING</NavLink>
            <NavLink onClick={()=>setNav(false)} className="nav-link" to="/women">WOMEN</NavLink>
            <NavLink onClick={()=>setNav(false)} className="nav-link" to="/men">MEN</NavLink>
            <NavLink onClick={()=>setNav(false)} className="nav-link" to="/Acc">ACCESSORIES</NavLink>
          </div>
          <div className='right-link'>
            <NavLink onClick={()=>setRender(!render)} className="nav-link" to="/about">ABOUT</NavLink>
            <NavLink onClick={()=>setRender(!render)} className="nav-link" to="/contactus">CONTACTUS</NavLink>
            <a onClick={Shcart} className="nav-link salary sm1">${data}</a>
            <div className='num-stor stor'>
              <div className='num'>{num}</div>
              <a onClick={Shcart} className="nav-link car"><FontAwesomeIcon icon={faCartShopping} /></a>
            </div>
            <NavLink onClick={()=>setNav(false)} className="nav-link user" to='user'><FontAwesomeIcon icon={faUser} /></NavLink>
          </div>
          <div onClick={saidebar} className='close-nav'>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      </Nav>
      <div>
        <div className={show ? "aside-link" : "show aside-link"}>
          <NavLink onClick={()=>saidebar()}  className=" user" to='user'><FontAwesomeIcon icon={faUser} /></NavLink>
          <div className='mo-links'>
            <NavLink onClick={()=>saidebar()} className="xs-links" to="/e-commerce">EVERYTHING</NavLink>
            <NavLink onClick={()=>saidebar()} className="xs-links" to="/women">WOMEN</NavLink>
            <NavLink onClick={()=>saidebar()} className="xs-links" to="/men">MEN</NavLink>
            <NavLink onClick={()=>saidebar()} className="xs-links" to="/Acc">ACCESSORIES</NavLink>
            <div className='about-us'>
              <NavLink onClick={()=>saidebar()} className="xs-links" to="/about">ABOUT</NavLink>
              <NavLink onClick={()=>saidebar()} className="xs-links " to="/contactus">CONTACTUS</NavLink>
            </div>
          </div>
          <div onClick={saidebar} className={show ? "xmark" : "xmark-show"}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      </div>
      <div className={showcart ? "cart-shop" : "cart-shop show-cart"}>

          {/* end aside Nav*/ }
        
        {/* Start Cart Nav*/ }
        <div className='nav-cart'>
          <p className='p-cart'> Shopping Cart</p>
          <div onClick={Shcart} className='close-cart'><FontAwesomeIcon icon={faXmark} /></div>
        </div>

        
        {cart && cart.map((pro, indix) =>
          <div className='pro-nav' key={`${pro.id}-${indix}`}>
            <div className='pro-nav-caption'>
              <Link to={`/product/${pro.id}`} onClick={()=>Shcart()}><img src={pro.image} alt={pro.title} /></Link>
              <span> × {pro.count}</span>
              <h4>{pro.title}</h4>
              <p className='p-pro-nav'>${pro.price}</p>
            </div>
            <button onClick={() => Claerpro(indix)}><FontAwesomeIcon icon={faXmark} /></button>
          </div>
        )}
        {cart && cart.length > 0 ? <Link  to="/show-cart" className='btn-showcart' onClick={()=>Shcart()}>showcart</Link> : ""} 
        {cart && cart.length > 0 && pricecart ? <Link  to="/show-cart" className='btn-showcart' onClick={()=>Shcart()}>Total ${pricecart.toFixed(2)}</Link> : ""}
      </div>
    </Navbar>
  );
}

export default Na;
