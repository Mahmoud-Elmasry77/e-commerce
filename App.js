import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Na from './na';
import Home from './Home';
import Footer from './footer';
import Notfound from './NotFound';
import Women from './women/women';
import Men from './Men/Men'
import './App.css';
import Acc from './Accessories/Acc';
import About from './About/About';
import ContactUs from './contact-Us/Contact-Us';
import ShowCart from './show cart/show-cart';
import ProductDetails from './ProductDetails';

function App() {
  const [showtop, setShowtop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(0);
  const [n, setN] = useState(0);
  const [nav, setNav] = useState();
  const [cartnav, setCartnav] = useState([]);
  const [render, setRender] = useState(false);
  const [num, setNum] = useState(0);
  const [cart, setCart]= useState([])
  const [none, setNone] = useState("none")
  window.onscroll = () => {
    setNone(false)
    if (window.scrollY > 400) {
      setShowtop(false);
    } else {
      setShowtop(true);
    }
  };

  const sTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(()=>{
    if(window.location.pathname === "/e-commerce" || window.location.pathname === "/about" || window.location.pathname === "/contactus"){
      setNav(true);
    }else{
      setNav(false);
    }
    
  },[render]);

  useEffect(()=>{
    const locaData = JSON.parse(window.localStorage.getItem("product"));
    if(locaData&& locaData.length >= 1){
      setCart(locaData)
    }else{
      setData("00.0")
    }
  },[render]);
  
  return (
    <BrowserRouter>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="App">

          <div style={{display : none}}  className={showtop ? "top" : "top show-top"} onClick={sTop}>
            <FontAwesomeIcon icon={faArrowUp} size="2x" />
          </div>

          <Na data={data} n={n} setNav={setNav} nav={nav} cartnav={cartnav} setRender={setRender} render={render} num={num} setNum={setNum} setCart={setCart} cart={cart} />

            <Routes>
                <Route path="/e-commerce" element={<Home setData={setData} setN={setN} setCartnav={setCartnav} setRender={setRender} render={render} num={num} setNum={setNum} setCart={setCart} cart={cart} />}/>

                <Route path="/women" element={<Women setCart={setCart} cart={cart} setNum={setNum} num={num} setData={setData} setCartnav={setCartnav} setRender={setRender} render={render}/>}></Route>

                <Route path='/men' element={<Men setCart={setCart} cart={cart} setNum={setNum} num={num} setData={setData} setCartnav={setCartnav} setRender={setRender} render={render}/>}/>

                <Route path='/Acc' element={<Acc setCart={setCart} cart={cart} setNum={setNum} num={num} setData={setData} setCartnav={setCartnav} setRender={setRender} render={render}/>}/>

                <Route path='/about' element={<About/>}/>

                <Route path='/contactus' element={<ContactUs/>}/>

                <Route path='/show-cart' element={<ShowCart cart={cart} setCart={setCart} num={num} setNum={setNum} setData={setData} data={data} setRender={setRender} render={render}/>}/>

                <Route path='/product/:id' element={<ProductDetails setCart={setCart} cart={cart} setNum={setNum} num={num} setRender={setRender} render={render} setData={setData} data={data} setCartnav={setCartnav} />}/>

              <Route path="*" element={<Notfound />} />
            </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
