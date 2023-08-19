import React, { useState, useEffect } from "react";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    console.log("here");
    fetch("http://localhost:8080/cars")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const availableCars = data.filter((car) => car.booking === null);
        setCars(availableCars);
      })
      .catch((error) => {
        console.error("Error fetching cars data:", error);
      });
  }, []);

  const today = new Date();

  return (
    <div id="car-container">
      {cars.map((car) => (
        <div key={car.id}>
          <img src={car.image} alt={car.brand} />
          <h2>{car.brand}</h2>
          <p>{car.model}</p>
          <p>Year: {car.year}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
