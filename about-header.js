import React, { useEffect, useLayoutEffect } from "react";
import { Col, Container, Row ,Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about-header.css';
import img from "../imges/banner-04.jpg"
function Aboutheader(){
    return(
        <div className="about-header">
            <div className="over-lay">
                <Container>
                    <Row>
                        <Col xs={12} lg={12}>
                        <h1>About Us</h1>
                        </Col>
                    </Row>
       
                </Container>
            </div>
        </div>

    )
}

export default Aboutheader;