
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar} from "@fortawesome/free-regular-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./product.css";
import Na from "./na";
import { Api } from "./useapi";

function Products({setData, setN}){
   const [pro, loading, err] = Api("https://fakestoreapi.com/products")
    const [show , setshow] = useState(null);
    const [price, setPrice] = useState(null);
    const [num , setNum] = useState(0)
    const spanShow = (indix)=>{
          setshow(indix)
    }
    const spanHid = ()=>{
      setshow(null)
    }
   const by = (id)=>{
    setPrice(parseFloat((id.price + price).toFixed(2)));
    setNum(num + 1)
   }
   useCallback(
    setData(price === null ? "00.0" : price)
   )
   useCallback(
    setN(num)
   )
    return(
        <div className="products">
        <Container>
             <Row>
                
                {loading && <div>loading ...</div>}
                {pro && pro.map((pro, indix)=><Col xs={6} md={4} lg={3} key={pro.id}>
                        <div className="link-product">
                            <div className="parint">
                            <Link onClick={()=>{indix && by(pro)}}  onMouseEnter={()=>spanShow(indix)} onMouseLeave={()=>spanHid(indix)}><FontAwesomeIcon icon={faBagShopping} size="2x"/></Link> 
                            <span className={show === indix ? "span show-span" : "span"}>Add to Cart</span>
                                <img src={pro.image} alt={pro.title}/>

                                <div className="pro-caption">
                                    <h4>{pro.title}</h4>
                                    <p className="price">&#36;{pro.price}</p>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </div>

                            </div>
                        </div>
                       
                </Col>
            )}
        {err && <p style={{color:"black" , textAlign:"center"}}>{err}</p>}
            </Row>
        </Container>
       
     </div>

    )
}

export default Products;