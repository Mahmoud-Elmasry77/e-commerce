import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import "./productDetails.css";

function ProductDetails({setCart, cart, setNum, num, setRender, render, setData, setAddcart}) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [price, setPrice] = useState(null);
    const [count , setCount] = useState(1)
    const IncCount = ()=>{
        setCount(count + 1)
    }
    const DecCoun = ()=>{
        if(count > 1) setCount(count - 1)
    };

    const Addpro = (pro)=>{
        setNum(num + count);
        setAddcart(false)
        // setProcount(count);
        // const Procount = 1;
        const existingProduct = cart.find((item) => item.id === pro.id);
        // const countPrice = parseFloat(pro.price) * count;
        // console.log(cart.map((item)=>item.id === pro.id))
            if(existingProduct){
                if(count >= 1){
                    setRender(!render)
                    const updatedCart = cart.map((item)=> item.id === pro.id ? {...item , count : item.count + count, price :parseFloat((item.price + (pro.price * count)).toFixed(2)), setprice : setPrice(item.price + (pro.price * count))} : item)
                    setCart(updatedCart)
                    window.localStorage.setItem("product" , JSON.stringify(updatedCart))
                    window.localStorage.setItem("price", JSON.stringify(parseFloat(((pro.price * count)  + price).toFixed(2))))
                    window.localStorage.setItem("num", JSON.stringify(num + count))
                }
            }else{

                if(count >= 1){

                        setCart([...cart, {
                            id : pro.id,
                            title : pro.title,
                            image : pro.image,
                            price : pro.price * count,
                            count : count,
                        }]);
                    
                        setPrice(parseFloat(((pro.price*count) + price).toFixed(2)))
                        setNum(count + num);
                        window.localStorage.setItem("num", JSON.stringify(num + count));
                        window.localStorage.setItem("price", JSON.stringify(parseFloat(((pro.price*count) + price).toFixed(2))));
                        window.localStorage.setItem("product", JSON.stringify([...cart, {
                            id : pro.id,
                            title : pro.title,
                            image : pro.image,
                            price : pro.price * count,
                            count : 1 * count,
                        }]))

                    }  else{

                            setCart([...cart, {
                                id : pro.id,
                                title : pro.title,
                                image : pro.image,
                                price : pro.price,
                                count : 1,
                            }]);
    
                            setPrice(parseFloat((pro.price + price).toFixed(2)));
                            setNum(num + 1);
                            window.localStorage.setItem("num", JSON.stringify(num + 1));
                            window.localStorage.setItem("price", JSON.stringify(parseFloat((pro.price + price).toFixed(2))));
                            window.localStorage.setItem("product", JSON.stringify([...cart, {
                                id : pro.id,
                                title : pro.title,
                                image : pro.image,
                                price : pro.price * count,
                                count : 1,
                            }]))

                            } 
                }
             setRender(!render)
     };

    useEffect(()=>{
        const locaData = JSON.parse(window.localStorage.getItem("product"));

    if(locaData && locaData.length >=1){  
        setPrice(JSON.parse(window.localStorage.getItem("price")));
        setNum(JSON.parse(window.localStorage.getItem("num")));
        setCart(JSON.parse(window.localStorage.getItem("product")))
        setCart(cart);
    
        }
        else {
                setCart([])
                setNum(0)
                setPrice(null)
                window.localStorage.setItem("num", JSON.stringify(num));
                window.localStorage.setItem("price", null)
            }
        },[render]);
        
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((err) =>err);
    }, [id]); 

    useEffect(()=>{
        setData(price === null ? "00.0" : price)
        setCart(cart);
    });

    return (
        <>
            {!product ? (
                <Container>
                <div className="loding-details">Loading...</div> 
                </Container>
            ) : (
                <Container>
                    <Row>
                        <Col xs={12}>
                        <div className="product-details">
                                <img className="product-details" src={product.image} alt={product.title} />
                                <h2 className="h2-product-detalis">{product.title}</h2>
                                <p className="p-product-detalis">{product.description}</p>
                                <span className="price-product-detalis">&#36;{product.price}</span>
                                <div>
                                    {count > 1 ? <button className="btn-count" onClick={DecCoun}>-</button> : <button className="btn-count" onClick={DecCoun} disabled>-</button>}
                                    <span className="count-product-detalis">{count}</span>
                                    <button className="btn-count" onClick={IncCount}>+</button>
                                </div>
                                <button onClick={()=>Addpro(product)} className="btn-pro-details">Add To Cart</button>
                            </div>
                         </Col> 
                    </Row>
                </Container>
            )}
        </>
    );
}

export default ProductDetails;