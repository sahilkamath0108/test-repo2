import React from 'react';
import './App.css'; // We'll create this CSS file next

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflix Clone</h1>
        {/* Navigation or search bar can go here */}
      </header>
      <main>
        {/* Movie rows will be displayed here */}
        <section className="movie-row">
          <h2>Trending Now</h2>
          <div className="movie-list">
            {/* Individual movie posters will go here */}
            <div className="movie-poster"></div>
            <div className="movie-poster"></div>
            <div className="movie-poster"></div>
            {/* Add more movie posters as needed */}
          </div>
        </section>

        <section className="movie-row">
          <h2>Originals</h2>
          <div className="movie-list">
            <div className="movie-poster"></div>
            <div className="movie-poster"></div>
            <div className="movie-poster"></div>
            {/* Add more movie posters as needed */}
          </div>
        </section>
        {/* Add more movie rows for different categories */}
      </main>
    </div>
  );
}

export default App;
