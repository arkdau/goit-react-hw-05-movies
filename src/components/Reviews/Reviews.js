import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "components/services/themoviedbAPI";
import { Li } from "./Reviews.styled";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    try {
      const data = await fetchMovies("reviews", movieId);
      // console.log("data-reviews: ", data.results);
      // console.log("id: ", movieId);
      setReviews(data.results);
    } catch (error) {
      console.error(error.message);
    } finally {
      // console.log("cast: ", reviews);
      return 1;
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

export default Reviews;
