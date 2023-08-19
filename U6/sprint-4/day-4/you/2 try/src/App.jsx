import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Book from "./Pages/Book";
import Error from "./Pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div data-testid="car-rental-app">
      <h1 className="red">Heloo</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/book/:id" element={<Book />} />
          <Route
            path="*"
            element={
              <h1>
                <Error />
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
