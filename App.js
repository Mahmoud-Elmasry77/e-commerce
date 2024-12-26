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
import User from './User/User'
import ShowCart from './show cart/show-cart';
import ProductDetails from './ProductDetails';
import Order from './orders/order'
import Swal from 'sweetalert2';
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
  const [none, setNone] = useState("none");
  const [addcart, setAddcart] = useState(true)
  const [addorder, setAddorder] = useState(true)
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
  // window.onload = ()=>{
  //    setLoading(false)
  // }
  
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
  
  // useEffect(()=>{
  //   Swal.fire({
  //     position: "top-center",
  //     icon: "success",
  //     title: "Your work has been saved",
  //     showConfirmButton: false,
  //     timer: 1500
  //     });
  // },[addcart])

  useEffect(()=>{
    setTimeout(()=>{
      setAddorder(true)
    },1500)
  },[addorder])
   
  return (
    <BrowserRouter>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="App">
          {/* <div className="loader"></div> */}
          {/* <div className={addcart ? "add-cart" : "add-cart-active"}>Product It Add</div> */}
          <div className={addorder ? "order-out" : "order-out-active"}>Your request is being processed.</div>
          <div style={{display : none}}  className={showtop ? "top" : "top show-top"} onClick={sTop}>
            <FontAwesomeIcon icon={faArrowUp} size="2x" />
          </div>

          <Na data={data} n={n} setNav={setNav} nav={nav} cartnav={cartnav} setRender={setRender} render={render} num={num} setNum={setNum} setCart={setCart} cart={cart} />

            <Routes>
                <Route path="/e-commerce" element={<Home setData={setData} setN={setN} setCartnav={setCartnav} setRender={setRender} render={render} num={num} setNum={setNum} setCart={setCart} cart={cart} setAddcart={setAddcart}/>}/>

                <Route path="/women" element={<Women setCart={setCart} cart={cart} setNum={setNum} num={num} setData={setData} setCartnav={setCartnav} setRender={setRender} render={render} setAddcart={setAddcart}/>}></Route>

                <Route path='/men' element={<Men setCart={setCart} cart={cart} setNum={setNum} num={num} setData={setData} setCartnav={setCartnav} setRender={setRender} render={render} setAddcart={setAddcart}/>}/>

                <Route path='/Acc' element={<Acc setCart={setCart} cart={cart} setNum={setNum} num={num} setData={setData} setCartnav={setCartnav} setRender={setRender} render={render} setAddcart={setAddcart}/>}/>

                <Route path='/about' element={<About/>}/>

                <Route path='/contactus' element={<ContactUs/>}/>
                
                <Route path='/user' element={<User/>}/>

                <Route path='/show-cart' element={<ShowCart cart={cart} setCart={setCart} num={num} setNum={setNum} setData={setData} data={data} setRender={setRender} render={render}/>}/>

                <Route path='/product/:id' element={<ProductDetails setCart={setCart} cart={cart} setNum={setNum} num={num} setRender={setRender} render={render} setData={setData} data={data} setCartnav={setCartnav} setAddcart={setAddcart}/>}/>

                <Route path='/order' element={<Order setCart={setCart} setData={setData} setNum={setNum} setRender={setRender} render={render} setAddorder={setAddorder}/>}/>

              <Route path="*" element={<Notfound />} />
            </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
