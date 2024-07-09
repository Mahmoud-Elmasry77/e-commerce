import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

function Footer(){
    return(
        <div className="footer">
            <div className="footer-links">
                <Container>
                    <Row>
                        <Col lg={5} md ={3}sm={12}>
                            <span>DAK</span>
                            <p>The best look anytime, anywhere.</p>
                        </Col>
                        
                        <Col lg={2} md={3} sm={12}>
                        <div className="for-her-links">
                            <h3>For Her</h3>
                            <ul>
                                <li>
                                    <Link>Women Jeans</Link>
                                </li>
                                <li>
                                    <Link>Tops an Shirts</Link>
                                </li>
                                <li>
                                    <Link>Women Jackets</Link>
                                </li>
                                <li>
                                    <Link>Heels and Flats</Link>
                                </li>
                                <li>
                                    <Link>Women Accessories</Link>
                                </li>
                            </ul>
                        </div>
                        </Col>

                        <Col lg={2} md={3} sm={12}>
                        <div className="for-him-links">
                            <h3>For Him</h3>
                            <ul>
                                <li>
                                    <Link>Men Jeans</Link>
                                </li>
                                <li>
                                    <Link>Men Shirts</Link>
                                </li>
                                <li>
                                    <Link>Men Shoes</Link>
                                </li>
                                <li>
                                    <Link>Men Accessories</Link>
                                </li>
                                <li>
                                    <Link>Men jackets</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={3} md={3} sm={12}>
                        <div className="form" >
                            <form action="" method="">
                            <label>Subscribe</label>
                            <input type="email" placeholder="Your email address..."></input>
                            <button className="p-3">subscribe</button>
                            </form>
                        </div>
                    </Col> 
                    </Row>
                </Container>
             </div>
             {/* Start last footer*/}
             <div className="last-footer">
                <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <p>Copyright &copy; {new Date().getFullYear()} Brandstore. Powered by Brandstore.</p>
                        </Col>
                      
                        <Col md={6} sm={12}>
                        <div className="social-links">
                            <ul>
                                <li>
                                    <Link><FontAwesomeIcon icon={faFacebookF}/></Link>
                                </li>
                                <li>
                                    <Link><FontAwesomeIcon icon={faYoutube}/></Link>
                                </li>
                                <li>
                                    <Link><FontAwesomeIcon icon={faXTwitter}/></Link>
                                </li>
                                <li>
                                    <Link><FontAwesomeIcon icon={faInstagram}/></Link>
                                </li>
                                <li>
                                    <Link><FontAwesomeIcon icon={faGoogle}/></Link>
                                </li>
                            </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>    
             </div>

             {/*end last footer */}
        </div>
    )
}

export default Footer;