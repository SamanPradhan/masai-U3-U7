import React, { useState } from "react";

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
    // Send a POST request to add a new car
    fetch("http://localhost:8080/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful response if needed
      })
      .catch((error) => {
        console.error("Error adding a new car:", error);
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
