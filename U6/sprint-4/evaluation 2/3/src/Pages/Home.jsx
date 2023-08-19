import React, { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("hello");
    fetch(`http://localhost:8080/movies`)
      .then((response) => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <div data-test-id="container"></div>
      {movies.map((movie) => {})}
    </>
  );
}

export default Home;
