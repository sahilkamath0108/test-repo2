// Mock data - in a real app, this would come from a database
const mockData = {
  featured: { title: 'Stranger Things', description: 'A group of young friends witness supernatural forces and secret government exploits.' },
  trending: [{ id: 1, title: 'The Witcher' }, { id: 2, title: 'Squid Game' }],
  topRated: [{ id: 3, title: 'Breaking Bad' }, { id: 4, title: 'Chernobyl' }],
  genres: {
    action: [{ id: 5, title: 'The Dark Knight' }],
    comedy: [{ id: 6, title: 'The Office' }],
    horror: [{ id: 7, title: 'The Conjuring' }],
  }
};

exports.getFeaturedMovie = (req, res) => {
  res.json(mockData.featured);
};

exports.getTrendingMovies = (req, res) => {
  res.json(mockData.trending);
};

exports.getTopRatedMovies = (req, res) => {
  res.json(mockData.topRated);
};

exports.getMoviesByGenre = (req, res) => {
  const genre = req.params.genre;
  res.json(mockData.genres[genre] || []);
};
