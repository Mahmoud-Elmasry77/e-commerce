import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faShirt, faGlobe,faTag } from "@fortawesome/free-solid-svg-icons";
function Offer(){
    return(
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
    )
}

export default Offer;