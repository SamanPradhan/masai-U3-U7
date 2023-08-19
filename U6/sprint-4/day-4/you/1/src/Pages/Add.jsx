import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [carData, setCarData] = useState({
    model: "",
    brand: "",
    year: "",
    image: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCarData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cars`,
        carData
      )
      .then((response) => {
        console.log("Car added successfully:", response.data);
        setCarData({
          model: "",
          brand: "",
          year: "",
          image: "",
        });
      })
      .catch((error) => {
        console.error("Error adding car:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="model"
          value={carData.model}
          onChange={handleChange}
          placeholder="Model"
          required
        />
        <input
          type="text"
          id="brand"
          value={carData.brand}
          onChange={handleChange}
          placeholder="Brand"
          required
        />
        <input
          type="number"
          id="year"
          value={carData.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
        <input
          type="text"
          id="image"
          value={carData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input type="submit" value="Add Car" />
      </form>
    </div>
  );
}

export default Add;
