import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faGlobe, faLock, faShirt, faTag } from "@fortawesome/free-solid-svg-icons";
import { faStar} from "@fortawesome/free-regular-svg-icons";
import "./featured.css";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import sportShose from '../src/imges/sports-shoe3-300x300.jpg'
import axios from "axios";
function Featured(){
              const [show , setshow] = useState(false);
              
              const spanShow = ()=>{
                    setshow(!show)
              }
              const spanHid = ()=>{
                setshow(false)
              }
    return(
        <div className="featured">
            {/* Start product*/}
            <Container>
                <Row>
                    <Col sm ={12}>
                    <h2 className="text-center">Featured Products</h2>
                    </Col>
                    <Col>
                        <div className="line text-center"></div>
                    </Col>
                </Row>
            </Container>
            <div className="products">
            <Container>
                 <Row>
                        <Col xs={6} md={4} lg={3}>
                            <div className="link-product">
                                <Link onMouseEnter={spanShow} onMouseLeave={spanHid}><FontAwesomeIcon icon={faBagShopping} size="2x"/></Link> 
                                <span className={show? "span show-span" : "span"}>Add to Cart</span>
                                <div>
                                    <img src={sportShose}/>
                                </div>
                                <h4>DNK Yellow Shoes</h4>
                                <p className="type">men</p>
                                <p className="price">&#36;120</p>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                        </Col>
                </Row>
            </Container>
         </div>
           {/* end product*/}

           {/* Start offer*/}
        <div className="time-offer">
            <div className="time-overlay">
                <Container>
                    <Row>
                        <Col xl={12} lg={8} md={8} xs={12}>
                            <div className="time-caption">
                                <h5>Limited Time Offer</h5>
                                <h3>Special Edition</h3>
                                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <p className="buy">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
                                <button className="p-3 shop">SHOP NOW</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        {/* end offer*/}
        <div className="offers">
        <Container>
            <Row>
                <Col lg={3} md={6} xs={12}>
                <div className="offers-icon">
                    <FontAwesomeIcon icon={faGlobe} size="3x"></FontAwesomeIcon>
                    <h5>Worldwide Shipping</h5>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                </Col>

                <Col lg={3} md={6} xs={12}>
                <div className="offers-icon">
                    <FontAwesomeIcon icon={faShirt} size="3x"></FontAwesomeIcon>
                    <h5>Best Quality</h5>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                </Col>

                <Col lg={3} md={6} xs={12}>
                <div className="offers-icon">
                    <FontAwesomeIcon icon={faLock} size="3x"></FontAwesomeIcon>
                    <h5>Best Quality</h5>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                </Col>

                <Col lg={3} md={6} xs={12}>
                <div className="offers-icon">
                    <FontAwesomeIcon icon={faTag} size="3x"></FontAwesomeIcon>
                    <h5>Best Quality</h5>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                </Col>

            </Row>
        </Container>
        </div>
        
        <div className="feat-link">
        <Container>
            <Link>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</Link>
            </Container>
        </div>
        
    </div>
    )
}

export default Featured;