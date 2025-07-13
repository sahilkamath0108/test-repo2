import React from 'react';
import './Row.css';

function Row({ title, isLargeRow }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* Posters will be mapped here */}
      </div>
    </div>
  );
}

export default Row;
