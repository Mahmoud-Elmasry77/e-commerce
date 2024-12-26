import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './showCart.css'; 
import { Link } from 'react-router-dom';

function ShowCart({ cart, setCart, num, setData, data, setNum, setRender, render }) {

  const removeFromCart = (index) => {
    
    const updatedCart = [...cart];
    const productToRemove = updatedCart[index];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    setRender(!render)
    const newTotalPrice = data - productToRemove.price;
    setData(parseFloat(newTotalPrice.toFixed(2)))
    window.localStorage.setItem("price", JSON.stringify(parseFloat(newTotalPrice.toFixed(2))))
    window.localStorage.setItem('product', JSON.stringify(updatedCart));
    window.localStorage.setItem('num', JSON.stringify(num - productToRemove.count))
  };
  
  useEffect(() => {
    const locaData = JSON.parse(window.localStorage.getItem("product"));
    if (locaData && locaData.length >=1 || window.localStorage.getItem("")) {
      setData(parseFloat(window.localStorage.getItem("price")));
      setCart(JSON.parse(window.localStorage.getItem("product")));
      setNum(parseInt(window.localStorage.getItem("num")));
    } else {
      setCart(cart);
      setNum(0);
      setData(null)
      window.localStorage.setItem("num", JSON.stringify(num));
      window.localStorage.setItem("price", null)
    }
  }, [render]);

  return (
    <div className="show-cart-page">
      <Container>
        <Row>
        <h1 className="text-center mb-4 h1-show-cart-page">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <Col xs={12}>
                <div className="table-container">
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>count</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((product, index) => (
                        <tr key={`${product.id}-${index}`}>
                          <td>
                            <Link to={`/product/${product.id}`} className="product-info">
                              <img src={product.image} alt={product.title} className="product-image" />
                              
                            </Link>
                          </td>
                          <td>
                              <h3 className="product-title mt-4">{product.title}</h3>
                          </td>

                          <td>
                            <p className='mt-4'>${parseFloat(product.price).toFixed(2)}</p>
                            </td>
                          <td> 
                            <p className='mt-4'>×{product.count} </p>
                          </td>
                          <td>
                            <button onClick={() => removeFromCart(index)} className="btn-remove mt-4"> Remove</button>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                  <div className="checkout-container text-center">
                      <p className='p-total-show-cart'>Total ${data}</p>
                    <Link to={'/order'} className="btn-checkout">
                      Checkout
                    </Link>
                  </div>
                </div>
          </Col>
        )}
        </Row>
      </Container>
    </div>
  );
}

export default ShowCart;
