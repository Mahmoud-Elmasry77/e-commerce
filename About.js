import React, { useEffect, useLayoutEffect } from "react";
import { Col, Container, Row ,Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import Aboutheader from "./about-header";
import Who from "./who";
import Ourteam from "./our-team";
import Followus from "./follow-us";
function About(){
    return(
        <div>
            <Aboutheader/>
            <Who/>
            <Ourteam/>
            <Followus/>
        </div>

    )
}

export default About;