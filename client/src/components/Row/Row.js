import React from 'react';
import './Row.css';

function Row({ title, isLargeRow }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* Several row__poster images would go here */}
        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} src="https://via.placeholder.com/150" alt="Movie Poster" />
        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} src="https://via.placeholder.com/150" alt="Movie Poster" />
      </div>
    </div>
  );
}

export default Row;
