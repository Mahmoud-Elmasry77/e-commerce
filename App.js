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

function App() {
  const [showtop, setShowtop] = useState(false);
  const [block, setBlock] = useState("none");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(0);
  const [n, setN] = useState(0);
  const [nav, setNav] = useState();
  const [cartnav, setCartnav] = useState([]);
  const [render, setRender] = useState(false);
  const [num, setNum] = useState(0);
  const [cart, setCart]= useState([])

  window.onscroll = () => {
    setBlock("block");
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
    if(window.location.pathname === "/e-commerce"){
      setNav(true)
    }else{
      setNav(false)
    }
    
  },[render],[nav]);

  useEffect(()=>{
    const locaData = JSON.parse(window.localStorage.getItem("product"));
    if(locaData&& locaData.length <= 0){
      setData("00.0")
    }else{
      setCart(locaData)
    }
  },[render]);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="App">
          <div style={{ display: block }} className={showtop ? "top" : "top show-top"} onClick={sTop}>
            <FontAwesomeIcon icon={faArrowUp} size="2x" />
          </div>
          <Na data={data} n={n} setNav={setNav} nav={nav} cartnav={cartnav} setRender={setRender} render={render} num={num} setNum={setNum} setCart={setCart} cart={cart} />
          <Routes>
            <Route path="/e-commerce" element={<Home setData={setData} setN={setN} setCartnav={setCartnav} setRender={setRender} render={render} num={num} setNum={setNum} setCart={setCart} cart={cart} />} />
            <Route path="/women" element={<Women setCart={setCart} cart={cart} setNum={setNum} num={num} setData={setData} setCartnav={setCartnav} render={render}/>} />
            <Route path='/men' element={<Men setCart={setCart} cart={cart} setNum={setNum} num={num} setData={setData} setCartnav={setCartnav} render={render}/>}/>
            <Route path='/Acc' element={<Acc setCart={setCart} cart={cart} setNum={setNum} num={num} setData={setData} setCartnav={setCartnav} render={render}/>}/>
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
