import axios from 'axios';

const apiKey = '0c417a58c1c75346941b8d1157cb6c11';
const baseUrl = 'https://api.themoviedb.org/3/discover/movie';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

async function fetchMovies() {
  try {
    const response = await axiosInstance.get('');
    return response.data.results.map((movie) => ({
      posterPath: movie.poster_path,
      overview: movie.overview,
      originalTitle: movie.original_title,
      releaseDate: movie.release_date,
    }));
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export { fetchMovies };