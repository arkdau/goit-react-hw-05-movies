import { Suspense, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import fetchMovies from "./../../components/services/themoviedbAPI";

const Movies = () => {
  const [queryFilter, setQueryFilter] = useState();
  const [movieData, setMovieData] = useState([]);
  const [urlSearchParams, setURLSearchParams] = useSearchParams();

  const query = urlSearchParams.get("query");

  useEffect(() => {
    // setMovieData((movieData) => {
    //   console.log('useEfect-movieData: ', movieData);
    //   return movieData;
    // });
    console.log('useEffect-query: ', query);
    // const q = query ? fetchData(query) : 0 ;
    // console.log('q: ', q);
    if (query) {
      fetchData(query);
    }
  }, []);

  const handleOnChange = (ev) => {
    const filter = ev.target.value;
    setQueryFilter(filter);
    setURLSearchParams({ query: filter });
    console.log("Movies-query: ", query);
  };

  const handleOnClick = (ev) => {
    ev.preventDefault();
    fetchData(queryFilter);
  };

  async function fetchData(search) {
    try {
      const data = await fetchMovies("query", search);

      console.log("data-search: ", data.results);
      setMovieData(data.results);
    } catch (error) {
      console.error(error.message);
    } finally {
      console.log("movieData: ", movieData);
      return 1;
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
