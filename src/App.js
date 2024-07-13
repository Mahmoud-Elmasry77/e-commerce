import React, { useCallback, useEffect, useLayoutEffect, useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Na from './na';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './footer';
import Notfound from './NotFound';
function App() {
    const [showtop, setShowtop] = useState(false);
    const [block , setBlock] = useState("none")
    const [loading , setLoading] = useState(true);
    const[data , setData] = useState();
    const[n, setN] = useState()
    window.onscroll = ()=>{
      setBlock("block")
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
    useLayoutEffect(()=>{
      const timer = setTimeout(()=>{
        setLoading(false);
      },3000)
      return ()=> clearTimeout(timer);
    },[])
  return (
    <BrowserRouter>
    
    {loading? (<div class="loader"></div>) :
    ( <div className="App">
    <div style={{display:block}} className={showtop? "top" : "top show-top"} onClick={sTop}><FontAwesomeIcon icon={faArrowUp} size='2x'/></div>
    <Na data = {data} n= {n}/>
    <Routes>
      <Route path='/e-commerce' element={<Home setData = {setData} setN= {setN}/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    <Footer/>
  </div>)}
   
    </BrowserRouter>
  )
}

export default App;
