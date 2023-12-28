import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "./../pages/MovieDetails/MovieDetails";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./../pages/Home/Home";
import { NotFound } from "./../pages/NotFound/NotFound";
import { Container, Header, Link } from "./App.styled";
import fetchMovies from "components/services/PixabayAPI";

// export const App = () => {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="movies">Movies</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:movieId" element={<MovieDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };
//
const App = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchData();

    // movies.map((movie) => {
    //   return movie;
    // })

    // console.log("movies: ", movies);
    // setTrendMovies(movies.value);
    // console.log('trendMovies: ', trendMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    try {
      const trendingMovies = await fetchMovies();
      let movies = [];

      movies = trendingMovies.map((movie) => {
        // return { title, id, overview, popularity, release_date, vote_average, vote_count} = movie;
        return movie;
      });
      console.log("trendingMovies: ", trendingMovies);
      setTrendMovies(movies);
      // console.log('trendMovies: ', trendMovies);
    } catch (error) {
      console.error(error.message);
    } finally {
      console.log("trendMovies: ", trendMovies);
    }
  }

  return (
    <Container>
      <Header>
        {
          /*<Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>*/
        }
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home trendMovies={trendMovies} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
