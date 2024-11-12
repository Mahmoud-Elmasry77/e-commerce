import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './follow-us.css';

function Followus(){
    return(
        <div className="follow-us">
            <div className="over-lay"> 
                <div className="div-follow-us">
                    <h1 className="h1-follow-us">Follow Us</h1>
                    <div className="social-links">
                            <ul>
                                <li>
                                    <Link to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></Link>
                                    
                                </li>
                                <li>
                                    <Link to="https://www.twitter.com"><FontAwesomeIcon icon={faXTwitter}/></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></Link>
                                </li>
                                <li>
                                    <Link to="https://www.google.com"><FontAwesomeIcon icon={faGoogle}/></Link>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Followus;