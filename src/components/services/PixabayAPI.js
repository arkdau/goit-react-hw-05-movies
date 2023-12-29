// const key = ;
// const image_type = "photo";

// const BASE_API_URL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'

const BASE_API_URL = "https://api.themoviedb.org/3";

// "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

// const url = "https://api.themoviedb.org/3/movie/movie_id?language=en-US";
// url = 'https://api.themoviedb.org/3/movie/movie_id/images';

// Timeout a fetch() Request
async function fetchWithTimeout(resource, options) {
  // console.log('resource: ', resource);
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  // console.log('response: ', response);
  return response;
}

/**
 * Category name to get a list of books in this category.
 * Will receive a collection of 20 books of a certain category
 */
const options = {
  timeout: 6000,
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzIzM2M4MGM0Nzc1MTIzOTg3MTdmMjg3NjhlMTgwYSIsInN1YiI6IjY1ODEwOWY1ZDUxOTFmMDhjMGFkZDIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zbDZtlAsmjePcU-Ywq0sHvtARqCNDqjMXVLE8WCg6_E",
  },
};

async function fetchMovies(q, movie_id) {
  // if (q === "trending" || q === "movie") {
  //   const url = `${BASE_API_URL}/${q}` + q === 'trending' ? '/movie/day?language=en-US' : '/movie_id?language=en-US';
  // } else {
  //   console.log()
  // }

  try {
    let url_1 = "";
    // const url_1 = (q === "trending")
    //   ? "/movie/day?language=en-US"
    //   : `/${movie_id}?language=en-US`;
    switch (q) {
      case "trending":
        url_1 = "/trending/movie/day?language=en-US";
        break;
      case "movie":
        url_1 = `/movie/${movie_id}?language=en-US`;
        break;
      case "images":
        url_1 = `/movie/${movie_id}/images`;
        break;

      default:
        break;
    }

    const url = `${BASE_API_URL}/${url_1}`;
    const response = await fetchWithTimeout(
      `${url}`,
      options,
    );
    // ok - shorthand for checking that the status is in the range 2xx (boolean)
    if (!response.ok) {
      throw new Error(
        `Network response was not OK - HTTP error: ${response.status}`,
      );
    }
    console.log("response: ", response);
    const data = await response.json();
    // debugger;
    // return data.results;
    return data;
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation:",
      error.message,
    );
  }
}
// }

export default fetchMovies;
