import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMovies from "components/services/PixabayAPI";

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    try {
      const trendingMovies = await fetchMovies('trending','');
      setTrendMovies(trendingMovies.results);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendMovies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <li>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
};
