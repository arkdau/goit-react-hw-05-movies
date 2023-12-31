import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "components/services/themoviedbAPI";
import { Image } from "./Cast.styled";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    try {
      const data = await fetchMovies("cast", movieId);
      // console.log("data-cast: ", data.cast);
      // console.log("id: ", movieId);
      setCast(data.cast);
    } catch (error) {
      console.error(error.message);
    } finally {
      // console.log("cast: ", cast);
      return 1;
    }
  }

  return (
    <main>
      <ul>
        {cast && cast.map((item) => (
          <div key={item.id}>
            {item.profile_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w185/${item.profile_path}`}
                alt=""
              />
            )}
            <li>
              {item.name}
            </li>
            <p>Character: {item.character}</p>
          </div>
        ))}
      </ul>
    </main>
  );
};

export default Cast;
