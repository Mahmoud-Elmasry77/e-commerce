import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./na.css";

function Na({ data, nav, setNav, setRender, render, num, setNum, setCart, cart }) {
  const [show, setshow] = useState(false);
  const [showcart, setShowcart] = useState(true);
  const [pricecart, setpricecart] = useState(0);

  const saidebar = () => {
    setshow(!show);
    setRender(!render);
  };

  const Shcart = () => {
    setShowcart(!showcart);
    setRender(!render);
  };

  const Claerpro = (indix) => {
    const updatedCart = [...cart];
    const productToRemove = updatedCart[indix];
    updatedCart.splice(indix, 1);

    const newTotalPrice = pricecart - productToRemove.price;

    setCart(updatedCart);
    setpricecart(newTotalPrice);
    setNum(num - 1);

    window.localStorage.setItem("product", JSON.stringify(updatedCart));
    window.localStorage.setItem("num", JSON.stringify(num - 1));
    window.localStorage.setItem("price", JSON.stringify(parseFloat((newTotalPrice).toFixed(2))));

    // إجبار الصفحة على إعادة العرض بدون إعادة التحميل
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
  }, [render]);

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
            <NavLink onClick={()=>setRender(!render)} className="nav-link" to="about">ABOUT</NavLink>
            <NavLink onClick={()=>setRender(!render)} className="nav-link" to="contactus">CONTACTUS</NavLink>
            <a onClick={Shcart} className="nav-link salary sm1">${data}</a>
            <div className='num-stor stor'>
              <div className='num'>{num}</div>
              <a onClick={Shcart} className="nav-link car"><FontAwesomeIcon icon={faCartShopping} /></a>
            </div>
            <NavLink className="nav-link user" to='user'><FontAwesomeIcon icon={faUser} /></NavLink>
          </div>
          <div onClick={saidebar} className='close-nav'>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      </Nav>
      <div>
        <div className={show ? "aside-link" : "show aside-link"}>
          <NavLink className=" user" to='user'><FontAwesomeIcon icon={faUser} /></NavLink>
          <div className='mo-links'>
            <NavLink onClick={()=>setRender(!render)} className="xs-links" to="/e-commerce">EVERYTHING</NavLink>
            <NavLink onClick={()=>setNav(false)} className="xs-links" to="/women">WOMEN</NavLink>
            <NavLink onClick={()=>setNav(false)} className="xs-links" to="/men">MEN</NavLink>
            <NavLink onClick={()=>setNav(false)} className="xs-links" to="/Acc">ACCESSORIES</NavLink>
            <div className='about-us'>
              <NavLink onClick={()=>setRender(!render)} className="xs-links" to="about">ABOUT</NavLink>
              <NavLink onClick={()=>setRender(!render)} className="xs-links " to="contactus">CONTACTUS</NavLink>
            </div>
          </div>
          <div onClick={saidebar} className={show ? "xmark" : "xmark-show"}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      </div>
      <div className={showcart ? "cart-shop" : "cart-shop show-cart"}>
        <div className='nav-cart'>
          <p className='p-cart'> Shopping Cart</p>
          <div onClick={Shcart} className='close-cart'><FontAwesomeIcon icon={faXmark} /></div>
        </div>
        {cart && cart.map((pro, indix) =>
          <div className='pro-nav' key={pro.id}>
            <div className='pro-nav-caption'>
              <img src={pro.image} alt={pro.title} />
              <h4>{pro.title}</h4>
              <p>${pro.price}</p>
            </div>
            <button onClick={() => Claerpro(indix)}><FontAwesomeIcon icon={faXmark} /></button>
          </div>
        )}
        {cart && cart.length > 0 ? <button className='btn-showcart'>showcart</button> : ""} 
        {cart && cart.length > 0 && pricecart ? <button className='btn-showcart'>Total ${pricecart.toFixed(2)}</button> : ""}
      </div>
    </Navbar>
  );
}

export default Na;
