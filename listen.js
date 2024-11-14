import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./listen.css";

function Listen(){
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        // التعبير النمطي للتحقق من صحة البريد الإلكتروني
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) validationErrors.name = "This field is required.";
        if (!subject) validationErrors.subject = "This field is required.";
        if (!email) validationErrors.email = "This field is required.";
        else if (!emailRegex.test(email)) validationErrors.email = "Email Not Valid";
        if (!message) validationErrors.message = "This field is required.";

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            
            console.log({ name, subject, email, message });
           
            alert('Good Send Your Messages');
           
            setName('');
            setSubject('');
            setEmail('');
            setMessage('');
        }
    };

    return(
        <div className="listen">
            <Container>
                <Row>
                    <Col lg={6} md={6} xs={12} sm={12}>
                        <div className="p">
                            <h6 className="h6-listen">Don't be a stranger!</h6>
                            <h1 className="h1-listen">You tell us. We listen.</h1>
                            <p className="p-listen">Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. 
                            Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} xs={12} sm={12}>
                        <div className="form-listen">
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    placeholder="NAME"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                
                                <input 
                                    type="text" 
                                    placeholder="SUBJECT"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                />
                                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                                
                                <input 
                                    type="text" 
                                    placeholder="EMAIL"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                
                                <textarea 
                                    placeholder="MESSAGE"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                />
                                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                
                                <input  
                                    className="submit-listen" 
                                    type="submit" 
                                    value="SEND MESSAGE"
                                />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Listen;
