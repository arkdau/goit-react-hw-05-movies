import { Cast } from "./../../components/Cast/Cast";
import { Reviews } from "./../../components/Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMovies from "components/services/PixabayAPI";
// import { Header} from "./../MovieDetails/MovieDetails.styled";
import styled from "styled-components";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  // useEffect(() => {
  //   // fetch(...)
  // }, [movieId]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  async function fetchData() {
    try {
      const data = await fetchMovies("movie", movieId);
      console.log("data: ", data);
      setMovieData(data);
      // const image = await fetchMovies('images', movieId);
      // setMovieImg(image);
      // console.log(image);
    } catch (error) {
      console.error(error.message);
    } finally {
      console.log("movieData: ", movieData);
    }
  }

  //   const Image = styled.img`
  //   vertical-align: text-top;
  //   height: 2.5rem;
  // `

  const Image = styled.img`
  vertical-align: text-top;
`;
  // var posterFullUrl = "https://image.tmdb.org/t/p/w185//" + item.poster_path;
  // https://api.themoviedb.org/3/movie/872585//fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg

  const Container = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   gap: 12px;
`;
  return (
    <main>
      <h1>MovieDetails {movieId}</h1>
      {movieData && (
        <Container>
          <Image
            src={`https://image.tmdb.org/t/p/w185/${movieData.poster_path}`}
            alt=""
          />
          <div>
            <h2>
              Title: {movieData.title} ({movieData.release_date.slice(0, 4)})
            </h2>
            <p>User Score: {movieData.vote_average}</p>
            <h3>Overview</h3>
            <p>{movieData.overview}</p>
            <h4>Genres</h4>
            <p>{movieData.genres.map((item) => {
              return <span key={item.id}>{item.name}  </span>
            })}</p>
          </div>
        </Container>
      )}
      <Cast />
      <Reviews />
    </main>
  );
};
