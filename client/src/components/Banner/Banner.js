import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Featured Movie</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">
          This is a placeholder description for the featured movie or show.
        </p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
