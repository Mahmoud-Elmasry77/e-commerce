import React, { useEffect, useLayoutEffect } from "react";
import { Col, Container, Row ,Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
function Header(){
    const ShopNow = ()=>{
        window.scrollTo({
            top:1400,
            behavior:"smooth"
        })
    }
    return(
        <header>
            <div className="over-lay">
                <Container>
                    <Row>
                        <div>
                            <h1>Raining Offers For Hot Summer!</h1>
                            <p>25% Off On All Products</p>
                        </div>
                        <div className="buttons">
                            <Col xs={12} md={12} lg={4}>
                                <button onClick={ShopNow} className="p-3 shop">SHOP NOW</button>
                                <button className="p-3 find">FIND MORE</button>
                            </Col>
                        </div>
                    </Row>
       
                </Container>
            </div>
        </header>

    )
}

export default Header;