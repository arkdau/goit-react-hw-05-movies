// const key = ;
// const image_type = "photo";

// const BASE_API_URL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'

const BASE_API_URL =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

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

async function fetchMovies() {
  try {
    const response = await fetchWithTimeout(
      `${BASE_API_URL}`,
      options,
    );
    // ok - shorthand for checking that the status is in the range 2xx (boolean)
    if (!response.ok) {
      throw new Error(
        `Network response was not OK - HTTP error: ${response.status}`,
      );
    }
    // console.log('response: ', response);
    const data = await response.json();
    // debugger;
    return data.results;
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation:",
      error.message,
    );
  }
}
// }

export default fetchMovies;
