import "./App.css";

import React, { useEffect, useState } from "react";
import Axios from "axios";
import Dashboard from "./Dashboard";
function App() {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/groceries")
      .then((response) => setGroceries(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Dashboard groceries={groceries} />
    </div>
  );
}

export default App;
