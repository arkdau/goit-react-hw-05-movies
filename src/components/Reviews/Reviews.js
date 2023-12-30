import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "components/services/PixabayAPI";
import { Li } from "./Reviews.styled";

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    try {
      const data = await fetchMovies("reviews", movieId);
      console.log("data-reviews: ", data.results);
      console.log("id: ", movieId);
      setReviews(data.results);
      // const image = await fetchMovies('images', movieId);
      // setMovieImg(image);
      // console.log(image);
    } catch (error) {
      console.error(error.message);
    } finally {
      console.log("cast: ", reviews);
    }
  }

  return (
    <main>
      <ul>
        {(reviews != null) && (reviews.length > 0)
          ? (reviews.map((item) => (
            <div key={item.id}>
              <Li>Author: {item.author}</Li>
              <p>{item.content}</p>
            </div>
          )))
          : <p>We don't have any reviews for this movie</p>}
      </ul>
    </main>
  );
};
