
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar} from "@fortawesome/free-regular-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { json, Link } from "react-router-dom";
import "./product.css";
import Na from "./na";
import { Api } from "./useapi";

function Products({setData, setCartnav, setRender, render, num , setNum, setCart, cart}){
   const [pro, loading, err] = Api("https://fakestoreapi.com/products")
    const [show , setshow] = useState(null);
    const [price, setPrice] = useState(null);
    const [local, setLocal] = useState([])
    const spanShow = useCallback((indix)=>{
          setshow(indix)
    }) 
    const spanHid = useCallback(()=>{
        setshow(null)
      }) 


   const by = (id)=>{

    setPrice(parseFloat((id.price + price).toFixed(2)));

    setNum(num + 1);

    setCart([...cart , {
        id : id.id,
        title : id.title,
        image : id.image,
        price : id.price,
    }]);
    
    window.localStorage.setItem("price", JSON.stringify(parseFloat((id.price + price).toFixed(2))))
    window.localStorage.setItem("num", JSON.stringify(num + 1));
    window.localStorage.setItem("product", JSON.stringify([...cart,
        {
        id : id.id,
        title : id.title,
        image : id.image,
        price : id.price,
    }]))
   };
   useEffect(()=>{
        const locaData = JSON.parse(window.localStorage.getItem("product"));

    if(locaData && locaData.length >=1){  
        setPrice(JSON.parse(window.localStorage.getItem("price")));
        setNum(JSON.parse(window.localStorage.getItem("num")));
        setLocal(JSON.parse(window.localStorage.getItem("product")))
        setCartnav(cart);
        setCart(cart)
        setCart(local);
       
        }
        else {
                setCart(cart)
                setNum(0)
                setPrice(null)
                window.localStorage.setItem("num", JSON.stringify(num));
                window.localStorage.setItem("price", null)
            }
        },[]);


  useEffect(()=>{
    setPrice(JSON.parse(window.localStorage.getItem("price")));
    setData((JSON.parse(window.localStorage.getItem("price"))));
  },[render])

  useEffect(()=>{
    if( window.localStorage.getItem("product") == []){
        setData(null)
        setNum(0)
    }
  },[render])
useEffect(()=>{
    setData(price === null ? "00.0" : price)
    setCartnav(cart)
})



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