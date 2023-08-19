import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cars`)
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cars data:", error);
      });
  }, []);

  const today = new Date();

  return (
    <div id="car-container">
      {cars.map((car) => {
        if (car.booking && new Date(car.booking.returnDate) >= today) {
          return null;
        }
        return (
          <div key={car.id}>
            <img src={car.image} alt={car.model} />
            <h2>{car.brand}</h2>
            <p>{car.model}</p>
            <p>Year: {car.year}</p>
            <button onClick={() => (window.location.href = `/book/${car.id}`)}>
              Book Now
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
