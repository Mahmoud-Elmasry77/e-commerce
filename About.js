import React, { useEffect, useLayoutEffect } from "react";
import { Col, Container, Row ,Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import Aboutheader from "./about-header";
import Who from "./who";
function About(){
    return(
        <div>
            <Aboutheader/>
            <Who/>
        </div>

    )
}

export default About;