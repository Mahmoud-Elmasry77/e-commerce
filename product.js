
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar} from "@fortawesome/free-regular-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Link } from "react-router-dom";
import "./product.css";
import { Api } from "./useapi";
import Swal from "sweetalert2";
function Products({setData, setCartnav, setRender, render, num , setNum, setCart, cart, setAddcart}){
   const [pro, loading, err] = Api("https://fakestoreapi.com/products")
    const [show , setshow] = useState(null);
    const [price, setPrice] = useState(null);
    const [local, setLocal] = useState([]);
    // const [itemprice, setItemPrice] = useState(null)
    const spanShow = useCallback((indix)=>{
          setshow(indix)
    }) 
    const spanHid = useCallback(()=>{
        setshow(null)
      }) 

   const by = (id)=>{


    // setPrice(parseFloat((itemprice + price).toFixed(2)));
    setNum(num + 1);
    setAddcart(false)
    // Cheek for product find in cart
    const existingProduct = cart.find((item) => item.id === id.id);
    // console.log(cart.map((item)=>item.title === id.title))
    // console.log(existingProduct)
            Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
        });
    if (existingProduct) {
        setRender(!render)
        // up data product
        const updatedCart = cart.map((item) => item.id === id.id ?
         { ...item, count: item.count + 1, price: parseFloat((item.price + id.price).toFixed(2)), setprice : setPrice(parseFloat((item.price + id.price).toFixed(2))) }
                : item
        );
        setCart(updatedCart)
        window.localStorage.setItem("product" , JSON.stringify(updatedCart))
        window.localStorage.setItem("price", JSON.stringify(parseFloat((price + id.price).toFixed(2))))
        window.localStorage.setItem("num", JSON.stringify(num + 1))
    }else{
            setCart([...cart , {
            id : id.id,
            title : id.title,
            image : id.image,
            price : id.price,
            count : 1 ,
        }]);
        window.localStorage.setItem("price", JSON.stringify(parseFloat((id.price + price).toFixed(2))))
         window.localStorage.setItem("num", JSON.stringify(num + 1));
         window.localStorage.setItem("product", JSON.stringify([...cart,
        {
        id : id.id,
        title : id.title,
        image : id.image,
        price : id.price,
        count : 1,
    }]))
    }
        };
   useEffect(()=>{
        const locaData = JSON.parse(window.localStorage.getItem("product"));

    if(locaData && locaData.length >=1){  
        setPrice(JSON.parse(window.localStorage.getItem("price")));
        setNum(JSON.parse(window.localStorage.getItem("num")));
        setLocal(JSON.parse(window.localStorage.getItem("product")))
        // setItemPrice(JSON.parse(window.localStorage.getItem("price")))
        // setCartnav(cart);
        setCart(local);
        }
        else {
                setCart([])
                setNum(0)
                setPrice(null)
                // setItemPrice(null)
                window.localStorage.setItem("num", JSON.stringify(num));
                window.localStorage.setItem("price", null)
            }
        },[render]);


    useEffect(()=>{
        setLocal(JSON.parse(window.localStorage.getItem("product")))
        setPrice(JSON.parse(window.localStorage.getItem("price")));
        setData((JSON.parse(window.localStorage.getItem("price"))));
        // setItemPrice(JSON.parse(window.localStorage.getItem("price")))
    },[render])

  
    useEffect(()=>{
        setData(price === null ? "00.0" : price)
        // setCartnav(cart)
        setCart(cart)
        
    })

    

    return(
        <div className="products">
            <Container>
                <Row>
                        
                            {loading && <div className="loding-details"></div>}
                            {pro && pro.map((pro, indix)=><Col xs={6} md={4} lg={3} key={`${pro.id}-${indix}`}>
                                    <div onClick={()=> setRender(!render)} className="link-product">
                                            <div className="parint">
                                                <div className="a" onClick={()=>{indix && by(pro)}}  onMouseEnter={()=>spanShow(indix)} onMouseLeave={()=>spanHid(indix)}><FontAwesomeIcon icon={faBagShopping} size="2x"/></div> 
                                                <span className={show === indix ? "span show-span" : "span"}>Add to Cart</span>
                                                 <Link to={`/product/${pro.id}`}><img src={pro.image} alt={pro.title}/></Link>

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