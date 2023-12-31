import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "./../pages/MovieDetails/MovieDetails";
import { Route, Routes } from "react-router-dom";
import { Home } from "./../pages/Home/Home";
import { NotFound } from "./../pages/NotFound/NotFound";
// import { Container } from "./App.styled";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { MainContainer } from "./MainContainer/MainContainer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
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
