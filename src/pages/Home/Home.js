import { useEffect } from "react";
import fetchMovies from "components/services/PixabayAPI";

export const Home = ({trendMovies}) => {
  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  //
  // const trendingMovies = async function fetchData() {
  //   try {
  //     const trendingMovies = await fetchMovies();
  //     console.log("trendingMovies: ", trendingMovies);
  //     return trendingMovies.results;
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }

  return (
    <main>
      <h1> Trends Movies </h1>
      <p>{trendMovies.map((movie) => {
        return movie.title;
      })}</p>
    </main>
  );
};
