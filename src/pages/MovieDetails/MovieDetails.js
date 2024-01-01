import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import fetchMovies from "components/services/themoviedbAPI";
import { Container, Hr, Image } from "./../MovieDetails/MovieDetails.styled";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate();

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
      // console.log("data: ", data);
      setMovieData(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      // console.log("movieData: ", movieData);
      return 1;
    }
  }

  const moveBack = () => navigate(-1);

  return (
    <main>
      {movieData && (
        <>
          <Suspense fallback={<div>Loading page...</div>}>
            <button onClick={moveBack}>Go back</button>
            <Container>
              <Image
                src={`https://image.tmdb.org/t/p/w185/${movieData.poster_path}`}
                alt=""
              />
              <div>
                <h2>
                  Title: {movieData.title}{" "}
                  ({movieData.release_date.slice(0, 4)})
                </h2>
                <p>User Score: {movieData.vote_average}</p>
                <h3>Overview</h3>
                <p>{movieData.overview}</p>
                <h4>Genres</h4>
                <p>
                  {movieData.genres.map((item) => {
                    return <span key={item.id}>{item.name}</span>;
                  })}
                </p>
              </div>
            </Container>
          </Suspense>
        </>
      )}
      <Hr />
      <p>Additional information</p>
      <ul>
        <li key={1}>
          <Link to="cast">Cast</Link>
        </li>
        <li key={2}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Hr />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
