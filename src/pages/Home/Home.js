import { Link } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import fetchMovies from "components/services/PixabayAPI";

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    try {
      const trendingMovies = await fetchMovies("trending", "");
      setTrendMovies(trendingMovies.results);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <main>
      <Suspense fallback={<div>Loading page...</div>}>
        <h1>Trending today</h1>
        <ul>
          {trendMovies.map((movie) => (
            <Link to={`/search/movies/${movie.id}`} key={movie.id}>
              <li>{movie.title}</li>
            </Link>
          ))}
        </ul>
      </Suspense>
    </main>
  );
};

export default Home;
