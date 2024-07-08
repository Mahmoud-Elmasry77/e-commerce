import React from "react";
import './Home.css';
import './na.css';
import './slider.css';
import Na from "./na";
import Header from "./Header";
import Slider from "./slider";
import Featured from "./featured";
function Home(){
    return(
        <div>
            <Header/>
            <Slider/>
            <Featured/> 
        </div>
    )
}

export default Home;