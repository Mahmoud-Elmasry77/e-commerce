import react from "react";
import { Col, Container, Row ,Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact-header.css';
function ContactHeader(){
    return(
        <div className="contact-us-header">
            <div className="over-lay">
                <Container>
                    <Row>
                        <Col xs={12} lg={12}>
                        <h1>Contact Us</h1>
                        </Col>
                    </Row>
       
                </Container>
            </div>
        </div>

    )
}

export default ContactHeader;