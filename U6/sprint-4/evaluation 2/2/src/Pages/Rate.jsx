import React, { useEffect, useState } from "react";

const Rate = ({ data }) => {
  const id = data.params.id;
  const [rate, setRate] = useState("");

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handleRate2 = (e) => {
    fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies/${id}`,
      {
        method: `PUT`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          averageReview: 50,
        }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <select data-test-id="rate-select" value={rate} onChange={handleRate}>
        <option value="0">Select rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button data-test-id="rate-confirm" onClick={handleRate2}>
        Rate
      </button>
    </div>
  );
};

export default Rate;
