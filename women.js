import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar} from "@fortawesome/free-regular-svg-icons";
import './women.css'

function Women({ setData, setCartnav, setNum, num, setCart, cart, render, setRender, setAddcart }) {
  const [womenProducts, setWomenProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show , setshow] = useState(null);
  const [price, setPrice] = useState(null);
  const [local, setLocal]= useState([])
    const spanShow = useCallback((indix)=>{
          setshow(indix)
    }) 

    const spanHid = useCallback(()=>{
        setshow(null)
      }) 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/category/women\'s clothing')
      .then(response => {
        setWomenProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("check conation internet");
        setLoading(false);
      });
  }, []);

  const by = (id)=>{

    // setPrice(parseFloat((itemprice + price).toFixed(2)));
    setNum(num + 1);
    setAddcart(false)
    // Cheek for product find in cart
    const existingProduct = cart.find((item) => item.id === id.id);
    // console.log(cart.map((item)=>item.title === id.title))
    // console.log(existingProduct)
    
    if (existingProduct) {
        
        // up date product
        const updatedCart = cart.map((item) => item.id === id.id ?
         { ...item, count: item.count + 1, price: parseFloat((item.price + id.price).toFixed(2)), setprice : setPrice(parseFloat((item.price + id.price).toFixed(2))) }
                : item
        );
        setCart(updatedCart)
        window.localStorage.setItem("product" , JSON.stringify(updatedCart))
        window.localStorage.setItem("price", JSON.stringify(parseFloat((price + id.price).toFixed(2))))
        window.localStorage.setItem("num", JSON.stringify(num + 1));
        
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
    setRender(!render)
   };

   useEffect(()=>{
    const locaData = JSON.parse(window.localStorage.getItem("product"));

if(locaData && locaData.length >=1){  
    setPrice(JSON.parse(window.localStorage.getItem("price")));
    setNum(JSON.parse(window.localStorage.getItem("num")));
    setLocal(JSON.parse(window.localStorage.getItem("product")))
    // setCartnav(cart);
    setCart(cart)
    setCart(local);
   
    }
    else {
            setCart([])
            setNum(0)
            setPrice(null)
            window.localStorage.setItem("num", JSON.stringify(num));
            window.localStorage.setItem("price", null)
        }
    },[render]);

    useEffect(()=>{
      setPrice(JSON.parse(window.localStorage.getItem("price")));
      setData((JSON.parse(window.localStorage.getItem("price"))));
    },[render])

   useEffect(()=>{
    setData(price === null ? "00.0" : price)
    setCart(cart)
  });


  return (
    <div className='product-woman'>
    <Container>
    <div className='caption-woman'>
        <h1 className='product-woman-h1'>
        Women
        </h1>
        <p className='product-woman-p'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
           Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
           Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.</p>
      </div>
      <Row>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {womenProducts && womenProducts.map((product, indix) => (
          <Col xs={6} md={4} lg={3} key={`${product.id}-${indix}`}>
                <div  className="link-product-woman">
                    <div className='parint'>
                    <div className='a' onClick={()=>{indix && by(product)}}  onMouseEnter={()=>spanShow(indix)} onMouseLeave={()=>spanHid(indix)}><FontAwesomeIcon icon={faBagShopping} size="2x"/></div> 
                    <span className={show === indix ? "span show-span" : "span"}>Add to Cart</span>
                        <Link to={`/product/${product.id}`}><img src={product.image} alt={product.title} /></Link>

                            <div className="pro-caption">
                                    <h4>{product.title}</h4>
                                    <p className="price">&#36;{product.price}</p>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                </div>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default Women;
