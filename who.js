import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./who.css";
import MyImage from "../imges/slide-image-free-img.jpg"
function Who(){
    return(
            <Container>
                <div className="who">
                <Row>
                    <Col lg={6} md ={12} sm={12} xs ={12} className="left">
                        <div className="div-who"></div>
                        <h1>Who We Are</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                         Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                         </p>
                    </Col>
                    <Col lg={6} md ={12} sm={12} xs ={12} className="right">
                        <img src={MyImage} alt="banner-04" title="banner-04"></img>
                    </Col>
                </Row>
            </div>
         </Container>
    )
}
export default Who;