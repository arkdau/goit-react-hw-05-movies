import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "./../pages/MovieDetails/MovieDetails";
import { Route, Routes } from "react-router-dom";
import { Home } from "./../pages/Home/Home";
import { NotFound } from "./../pages/NotFound/NotFound";
import { Container, Header, Link } from "./App.styled";

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
export const App = () => {
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
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

// export default App;
