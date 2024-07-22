import React, {memo, createContext} from "react";
import axios from "axios";
import './Home.css';
import './na.css';
import './slider.css';
import Header from "./Header";
import Slider from "./slider";
import Featured from "./featured";
import { Api } from "./useapi";

function Home({setData, setN, setCartnav}){

    return(

        <div>
            <Header/>
            <Slider/>
            <Featured setData={setData} setN={setN} setCartnav = {setCartnav}/> 
        </div>
    )
}

export default memo (Home);