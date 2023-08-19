import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Book() {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setBookingData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cars/${id}`,
        { booking: bookingData }
      )
      .then((response) => {
        console.log("Car booked successfully:", response.data);
        // Clear the form fields after successful submission
        setBookingData({
          name: "",
          email: "",
          phone: "",
          pickupDate: "",
          returnDate: "",
        });
      })
      .catch((error) => {
        console.error("Error booking car:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={bookingData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          id="email"
          value={bookingData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          id="phone"
          value={bookingData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          type="date"
          id="pickupDate"
          value={bookingData.pickupDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          id="returnDate"
          value={bookingData.returnDate}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Book Car" />
      </form>
    </div>
  );
}

export default Book;
