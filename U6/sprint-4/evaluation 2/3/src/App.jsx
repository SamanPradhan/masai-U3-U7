import "./App.css";
import Home from "./Pages/Home";
import Rate from "./Pages/Rate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div id="app">
      <h1>top</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rate" element={<Rate />}></Route>
          <Route path="*">error</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
