import { Suspense, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import fetchMovies from "./../../components/services/PixabayAPI";

const Movies = () => {
  const [queryFilter, setQueryFilter] = useState();
  const [movieData, setMovieData] = useState([]);
  const [urlSearchParams, setURLSearchParams] = useSearchParams();

  const query = urlSearchParams.get("query");

  const handleOnChange = (ev) => {
    const filter = ev.target.value;
    setQueryFilter(filter);
    setURLSearchParams({ query: filter });
    console.log("Movies-query: ", query);
  };

  const handleOnClick = (ev) => {
    ev.preventDefault();
    fetchData();
  };

  // useEffect(() => {
  //   setQueryFilter(query);
  //   console.log("movie-movieId: ", query);
  //
  //   fetchData();
  //   // setURLSearchParams({query: movieId});
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

      <input
        placeholder="Enter filter here"
        onChange={handleOnChange}
      />
      <button onClick={handleOnClick}>Search</button>
      <Suspense fallback={<div>Loading page...</div>}>
        <ul>
          {movieData.map((movie) => (
            <Link to={`/search/movies/${movie.id}`} key={movie.id}>
              <li>{movie.title}</li>
            </Link>
          ))}
        </ul>
      </Suspense>
    </main>
  );
};

export default Movies;
