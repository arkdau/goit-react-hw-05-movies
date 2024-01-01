import { lazy, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NotFound } from "./../pages/NotFound/NotFound";

const Home = lazy(() => import("./../pages/Home/Home"));
const Movies = lazy(() => import("./../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./../pages/MovieDetails/MovieDetails"));

const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const MainContainer = lazy(() => import("./MainContainer/MainContainer"));

// const MoviesPage = () => (
//   <Suspense fallback={<div>Page is Loading...</div>}>
//     <Movies />
//   </Suspense>
// );


export const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainContainer />}>
        <Route index element={<Home />} />
        <Route path="/goit-react-hw-05-movies" element={<Home />} />
        <Route path="/search/movies" element={<Movies />} />
        <Route path="/search/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
