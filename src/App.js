import React  from 'react';
import './App.css';
import Na from './na';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Na/>
    <Routes>
      <Route path='/e-commerce' element={<Home/>}></Route>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App;
