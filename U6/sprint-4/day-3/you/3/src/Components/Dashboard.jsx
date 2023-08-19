import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [groceries, setGroceries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/groceries")
      .then((response) => setGroceries(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredGroceries = groceries.filter((grocery) =>
    grocery.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        className="search_box"
        type="text"
        placeholder="Search Groceries"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="grocery_data">
        {filteredGroceries.map((grocery) => (
          <div key={grocery.id}>
            <h3>{grocery.name}</h3>
            <div>{grocery.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
