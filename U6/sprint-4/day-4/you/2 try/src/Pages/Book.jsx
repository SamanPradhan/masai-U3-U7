import React, { useState } from "react";

const Book = (props) => {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setBookingData({ ...bookingData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const carId = props.match.params.id;

    fetch(`http://localhost:8080/cars/${carId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ booking: bookingData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Car booked successfully:", data);
      })
      .catch((error) => {
        console.error("Error updating booking data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="name" placeholder="Name" onChange={handleChange} />
      <input
        type="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="tel"
        id="phone"
        placeholder="Phone"
        onChange={handleChange}
      />
      <input type="date" id="pickupDate" onChange={handleChange} />
      <input type="date" id="returnDate" onChange={handleChange} />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default Book;
