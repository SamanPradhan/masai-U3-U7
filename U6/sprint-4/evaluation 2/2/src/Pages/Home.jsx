import React, { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
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

  const handleRateButon = (movieId) => {
    window.location.href = `/rate/${movieId}`;
  };
  return (
    <>
      <div data-test-id="container">
        {movies.map((movie) => {
          <div
            data-test-id="movie-card"
            className="bg-white rounded-md shadow-md overflow-hidden"
            key={movie.id}
          >
            <img src={movie.pics} alt="movie_pics" />
            <div>
              <h1>{movie.name}</h1>
              <p>{movie.language}</p>
              <p>{movie.actor}</p>
              <p>{movie.averageReview}</p>
              <p>{movie.genre}</p>
            </div>
          </div>;
        })}
      </div>
      {/* Here will come the Pagination component */}
    </>
  );
}

export default Home;

// import React, { useEffect, useState } from "react";
// import Card from "../Components/Card";
// function Home() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:8080/movies`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setMovies(data);
//       })
//       .catch((err) => {
//         console.log("error", err);
//       });
//   });
//   return (
//     <>
//       <div data-test-id="container">
//         {movies.map((movie) => {
//           <div
//             data-test-id="movie-card"
//             className="bg-white rounded-md shadow-md overflow-hidden"
//           >
//             <img src={movie.pics} alt="movie_pics" />
//             <div>
//               <h1>{movie.name}</h1>
//               <p>{movie.language}</p>
//               <p>{movie.actor}</p>
//               <p>{movie.averageReview}</p>
//               <p>{movie.genere}</p>
//             </div>
//           </div>;
//         })}
//       </div>
//       {/* Here will come the Pagination component */}
//     </>
//   );
// }

// export default Home;
