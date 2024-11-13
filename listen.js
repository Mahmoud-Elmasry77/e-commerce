import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./listen.css";

function Listen(){
    const  [valid , setValid]= useState("")
    const [input, setInput] =useState("")

    const change = (e)=>{
        setInput(e.target.value)
        setValid(input)
    }

        const submit = (e)=>{
            if(e.target.value !== " "){
                e.preventDefault();
                setValid("m")
            }else{
                return true
            }
        }
    
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
                            <form onSubmit={submit}>
                            <input onChange={change} type="text" required placeholder="NAME"></input>
                            {valid && <p>Mah</p>}
                            <input  type="text" required placeholder="SUBJECT"></input>
                            <input value={valid} type="Email" required placeholder="EMAIL"></input>
                            <textarea value={valid} required placeholder="MESSAGE"></textarea>
                            <input  className="submit-listen" type="submit" value="SEND MESSAGE"></input>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Listen;