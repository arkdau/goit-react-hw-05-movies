import { useState } from "react";
import { Link } from "react-router-dom";
import fetchMovies from "components/services/PixabayAPI";

export const Movies = () => {
  const [queryFilter, setQueryFilter] = useState();
  const [movieData, setMovieData] = useState([]);

  const handleOnChange = (ev) => {
    const filter = ev.target.value;
    setQueryFilter(filter);
  };

  const handleOnClick = (ev) => {
    ev.preventDefault();
    fetchData();
  };

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [movieId]);

  async function fetchData() {
    try {
      const data = await fetchMovies("query", queryFilter);
      console.log("data-search: ", data.results);
      setMovieData(data.results);
    } catch (error) {
      console.error(error.message);
    } finally {
      console.log("movieData: ", movieData);
    }
  }

  return (
    <main>
      <h1>Movies</h1>

      <input placeholder="Enter filter here" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Search</button>

      <ul>
        {movieData.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <li>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
};
