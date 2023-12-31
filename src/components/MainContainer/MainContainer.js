import { Container } from "pages/MovieDetails/MovieDetails.styled";
import { Outlet } from "react-router-dom";
import { Header, Link } from "./../App.styled";

export function MainContainer() {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="search/movies">Movies</Link>
          </nav>
        </Header>
      </Container>
      <Outlet />
    </>
  );
}
