import React, { useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './showCart.css'; 

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
    window.localStorage.setItem('num', JSON.stringify(num - 1))
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
        <h1 className="text-center mb-4 h1-show-cart-page">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <div className="product-info">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <span className="product-title">{product.title}</span>
                      </div>
                    </td>
                    <td>${parseFloat(product.price).toFixed(2)}</td>
                  
                    <td>
                      <button  onClick={() => removeFromCart(index)} className="btn-remove"> Remove</button>
                      
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
            <div className="checkout-container text-center">
                <p className='p-total-show-cart'>Total ${data.toFixed(2)}</p>
              <button 
                onClick={() => alert('Proceed to checkout')} 
                className="btn-checkout"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default ShowCart;
