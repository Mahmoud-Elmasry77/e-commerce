import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Harvey from "../imges/team2-free-img.png";
import Jessica from "../imges/team1-free-img.png";
import Rachel from "../imges/team3-free-img.png";
import Luise from "../imges/team4free-img.png"
import Katrina from "../imges/team5-free-img.png";
import Mike from "../imges/team6-free-img.png";
import "./our-team.css"
function Ourteam(){
    return(
        <div className="our-team"> 
            <Container>
                <Row>
                    <div className="container-our-team">
                    <div className="div-our-team"></div>
                    <h5 className="h5-our-team">A Few Words About</h5>
                    <h2 className="h2-our-team">Our Team</h2>
                    <p>Nam nec tellus a odio tincidunt auctor a ornare odio
                        . Sed non mauris vitae erat consequat auctor eu in elit.
                         Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                <Row>
                    <Col lg={4} md={4} xs={12}>
                    <div className="caption-our-team">
                        <img src={Harvey} alt="hervey" title="harvey"></img>
                        <h5>Harvey Spector</h5>
                        <p>Founder - CEO</p>
                     </div>
                    </Col>

                    <Col lg={4} md={4} xs={12}>
                    <div className="caption-our-team">
                        <img src={Jessica} alt="hervey" title="harvey"></img>
                        <h5>Jessica Pearson</h5>
                        <p>COO</p>
                     </div>
                    </Col>

                    <Col lg={4} md={4} xs={12}>
                    <div className="caption-our-team">
                        <img src={Rachel} alt="hervey" title="harvey"></img>
                        <h5>Rachel Zain</h5>
                        <p>Marketing Head</p>
                     </div>
                    </Col>

                    <Col lg={4} md={4} xs={12}>
                    <div className="caption-our-team">
                        <img src={Luise} alt="hervey" title="harvey"></img>
                        <h5>Luise Litt</h5>
                        <p>Lead Developer</p>
                     </div>
                    </Col>

                    <Col lg={4} md={4} xs={12}>
                    <div className="caption-our-team">
                        <img src={Katrina} alt="hervey" title="harvey"></img>
                        <h5>Katrina Bennett</h5>
                        <p>Intern Designer</p>
                     </div>
                    </Col>

                    <Col lg={4} md={4} xs={12}>
                    <div className="caption-our-team">
                        <img src={Mike} alt="hervey" title="harvey"></img>
                        <h5>Mike Ross</h5>
                        <p>Intern Designer</p>
                     </div>
                    </Col>

                    </Row>

                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Ourteam;