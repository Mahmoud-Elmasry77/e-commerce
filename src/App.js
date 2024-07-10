import React, { useCallback, useEffect, useLayoutEffect, useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Na from './na';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './footer';
function App() {
    const [showtop, setShowtop] = useState(false);
    window.onscroll = ()=>{
      if(window.scrollY > 400){
        setShowtop(false)
      }else{
        setShowtop(true)
      }
    }
    const sTop = ()=>{
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }
  return (
    <BrowserRouter>
    <div className="App">
      <Na/>
    <Routes>
      <Route path='/e-commerce' element={<Home/>}></Route>
    </Routes>
    <Footer/>
    <div className={showtop? "top" : " top show-top"} onClick={sTop}><FontAwesomeIcon icon={faArrowUp} size='2x'/></div>
    </div>
    </BrowserRouter>
  )
}

export default App;
