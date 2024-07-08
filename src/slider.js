import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';

function Slider(){
    const style = {
        with : "40px",
        height: "40px"
    }
    return(
        <>
        <div className='slider'>
            <Container>
                <Row>
                    <Carousel interval={1000}>
                            <Carousel.Item>
                                    <div className='item1'></div>
                            </Carousel.Item>

                            <Carousel.Item>
                            <div className='item2'></div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div className='item3'></div>
                            </Carousel.Item>

                            <Carousel.Item>
                            <div className='item4'></div>
                            </Carousel.Item>
                    </Carousel> 
                </Row>
            </Container>
        </div>
        <div className='parent-offer'>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className='offer'>
                            <div className='of-1'>
                                <div className='o-overlay'>
                                    <div>
                                        <h2>20% Off On Tank Tops</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                                        <button className='p-3'>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className='offer'>
                            <div className='of-2'>
                                <div className='o-overlay'>
                                    <div>
                                        <h2>Latest Eyewear For You</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                                        <button className='p-3'>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className='offer'>
                            <div className='of-3'>
                                <div className='o-overlay'>
                                    <div>
                                        <h2>Let's Lorem Suit Up!</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                                        <button className='p-3'>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}

export default Slider;