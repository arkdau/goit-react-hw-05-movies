import { Suspense } from "react";
import { Container } from "pages/MovieDetails/MovieDetails.styled";
import { Outlet } from "react-router-dom";
import { Header, Link } from "./../App.styled";

export default function MainContainer() {
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
