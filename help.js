import React from "react";
import './help.css'
import { Container, Row, Col } from "react-bootstrap";

function Help(){
    return(
        <div className="help">
            <Container>
                <p>Have any queries?</p>
                <h1 className="h1-help">We're here to help.​</h1>
                <div className="div-help"></div>
                <Row>
                    <Col lg={3} md={3} sm={12} xs={12}>
                    <div className="caption-help">
                        <h3 className="help-h3">Sales</h3>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <p className="caption-help-p">1800 123 4567</p>
                    </div>
                    </Col>

                    <Col lg={3} md={3} sm={12} xs={12}>
                    <div className="caption-help">
                        <h3 className="help-h3">Complaints</h3>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <p className="caption-help-p">1900 223 8899</p>
                    </div>
                    </Col>

                    <Col lg={3} md={3} sm={12} xs={12}>
                    <div className="caption-help">
                        <h3 className="help-h3">Returns</h3>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <p className="caption-help-p">returns@mail.com</p>
                    </div>
                    </Col>

                    <Col lg={3} md={3} sm={12} xs={12}>
                    <div className="caption-help">
                        <h3 className="help-h3">Marketing</h3>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <p className="caption-help-p">1700 444 5578</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Help;