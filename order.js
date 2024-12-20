import React, { useState } from "react";
//import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./order.css"; 
import { Container } from "react-bootstrap";

const Order = ({setCart, setNum, setData, setRender, render, setAddorder}) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [location, setLocation] = useState({ lat: 24.7136, lng: 46.6753 });
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { name: "", phone: "" };

    // Check name for empty input or invalid characters
    if (!formData.name.trim() || !formData.name.match(/[a-zA-Z0-9]+/)) {
      newErrors.name = "Please enter a valid name.";
      isValid = false;
    }

    // Check phone for 11 digits
    if (!formData.phone.match(/^[0-9]{11}$/)) {
      newErrors.phone = "Phone number must be 11 digits.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      formData.name = ""
      formData.phone = "";
      window.localStorage.clear();
      setData("00.0");
      setCart([]);
      setNum(0);
      setRender(!render)
      setAddorder(false)
    }
  };

  const handleMapClick = (e) => {
    setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  return (
    <Container>
      <div className="order">
        <h2 className="h2-order">Fill the Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className={`form-group ${errors.name ? "error" : ""}`}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className={`form-group ${errors.phone ? "error" : ""}`}>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>

          <button type="submit" className="button">Submit</button>
        </form>

        <h3 className="h3-order">Select Your Location</h3>
        {/*<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">*/}
        {/*  <GoogleMap*/}
        {/*    mapContainerStyle={{ width: "100%", height: "400px" }}*/}
        {/*    center={location}*/}
        {/*    zoom={15}*/}
        {/*    onClick={handleMapClick}*/}
        {/*  >*/}
        {/*    <Marker position={location} />*/}
        {/*  </GoogleMap>*/}
        {/*</LoadScript>*/}
      </div>
    </Container>
  );
};

export default Order;
