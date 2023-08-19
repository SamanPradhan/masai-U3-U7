import React from "react";

function Card({ movie }) {
  return (
    <div
      data-test-id="movie-card"
      className="bg-white rounded-md shadow-md overflow-hidden"
    >
      <img src={movie.pics} alt="movie_pics" />
      <div>
        <h1>{movie.name}</h1>
        <p>{movie.language}</p>
        <p>{movie.actor}</p>
        <p>{movie.averageReview}</p>
        <p>{movie.genere}</p>
      </div>
    </div>
  );
}

export default Card;
