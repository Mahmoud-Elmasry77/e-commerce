import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import "./productDetails.css";

function ProductDetails({setCart, cart, setNum, num, setRender, render}) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [price, setPrice] = useState(null);
    const [count , setCount] = useState(1)
    const IncCount = ()=>{
        setCount(count + 1)
    }
    const DecCoun = ()=>{
        setCount(count - 1)
    };

    const Addpro = (pro)=>{
        setRender(!render)
            if(count > 1){
                setCart([...cart, {
                    id : pro.id,
                    title : pro.title,
                    image : pro.image,
                    price : pro.price * count,
                }])
            }else{
                setCart([...cart, {
                    id : pro.id,
                    title : pro.title,
                    image : pro.image,
                    price : pro.price,
                }])
            }

            
       };
        
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((err) =>err);
    }, [id]); 

    return (
        <>
            {!product ? (
                <div className="loding-details">Loading...</div> 
            ) : (
                <Container>
                    <Row>
                        <Col xs={12}>
                        <div className="product-details" key={product.id}>
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