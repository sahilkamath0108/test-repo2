import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Row from '../../components/Row/Row';
import requests from '../../api/requests';

function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default HomePage;
