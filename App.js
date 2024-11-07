import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Na from './na';
import Home from './Home';
import Footer from './footer';
import Notfound from './NotFound';
import Woman from './woman/woman';
import './App.css';

function App() {
  const [showtop, setShowtop] = useState(false);
  const [block, setBlock] = useState("none");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(0);
  const [n, setN] = useState(0);
  const [nav, setNav] = useState(true);
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

  useEffect(() => {
    if (window.location.pathname !== "/e-commerce") {
      setNav(false);
    } else {
      setNav(true);
    }
  }, []);
  useEffect(()=>{
    if( cart.length == 0 && num == 0){
        setData( null ? "00.0" : data)
        setNum(0)
    }
    console.log(cart)
  },[render])

  return (
    <BrowserRouter>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="App">
          <div style={{ display: block }} className={showtop ? "top" : "top show-top"} onClick={sTop}>
            <FontAwesomeIcon icon={faArrowUp} size="2x" />
          </div>
          <Na data={data} n={n} nav={nav} cartnav={cartnav} setRender={setRender} render={render} num={num} setNum={setNum} setCart={setCart} cart={cart} />
          <Routes>
            <Route path="/e-commerce" element={<Home setData={setData} setN={setN} setCartnav={setCartnav} setRender={setRender} render={render} num={num} setNum={setNum} setCart={setCart} cart={cart} />} />
            <Route path="/woman" element={<Woman />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
